(() => {
  const IMAGE_SRC = "images/instruktion.png";

  function ensureStyles() {
    if (document.getElementById("installGuideModalStyles")) return;

    const style = document.createElement("style");
    style.id = "installGuideModalStyles";
    style.textContent = `
      #installGuideModal {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: none;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .94);
        padding: max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
        overflow: hidden;
        touch-action: none;
      }

      #installGuideModal.open {
        display: flex;
      }

      #installGuideViewport {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        touch-action: none;
      }

      #installGuideImage {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 16px;
        box-shadow: 0 20px 70px rgba(0, 0, 0, .55);
        transform: translate3d(0, 0, 0) scale(1);
        transform-origin: center center;
        transition: transform .08s linear;
        user-select: none;
        -webkit-user-drag: none;
        touch-action: none;
      }

      #installGuideClose {
        position: absolute;
        top: max(12px, env(safe-area-inset-top));
        right: max(12px, env(safe-area-inset-right));
        z-index: 2;
        width: 48px;
        height: 48px;
        border: 0;
        border-radius: 14px;
        background: rgba(255, 255, 255, .95);
        color: #0f172a;
        font-size: 30px;
        line-height: 1;
        font-weight: 900;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
        touch-action: manipulation;
      }

      #installGuideZoomControls {
        position: absolute;
        left: 12px;
        bottom: max(12px, env(safe-area-inset-bottom));
        z-index: 2;
        display: flex;
        gap: 8px;
      }

      #installGuideZoomControls button {
        min-width: 46px;
        height: 46px;
        border: 0;
        border-radius: 14px;
        background: rgba(255, 255, 255, .95);
        color: #0f172a;
        font-size: 24px;
        font-weight: 900;
        cursor: pointer;
        touch-action: manipulation;
      }

      #installGuideZoomReset {
        padding: 0 12px;
        font-size: 17px !important;
      }
    `;
    document.head.appendChild(style);
  }

  function openGuide() {
    ensureStyles();

    let modal = document.getElementById("installGuideModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "installGuideModal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.innerHTML = `
        <button id="installGuideClose" type="button" aria-label="Close">x</button>
        <div id="installGuideViewport">
          <img id="installGuideImage" src="${IMAGE_SRC}" alt="Installation guide">
        </div>
        <div id="installGuideZoomControls">
          <button id="installGuideZoomOut" type="button" aria-label="Zoom out">-</button>
          <button id="installGuideZoomReset" type="button" aria-label="Reset zoom">1x</button>
          <button id="installGuideZoomIn" type="button" aria-label="Zoom in">+</button>
        </div>
      `;
      document.body.appendChild(modal);
      bindModal(modal);
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function bindModal(modal) {
    const image = modal.querySelector("#installGuideImage");
    let scale = 1;
    let x = 0;
    let y = 0;
    let lastX = 0;
    let lastY = 0;
    let startDistance = 0;
    let startScale = 1;

    function render() {
      image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    }

    function setScale(nextScale) {
      scale = Math.min(5, Math.max(1, nextScale));
      if (scale === 1) {
        x = 0;
        y = 0;
      }
      render();
    }

    function close() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      setScale(1);
    }

    function distance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    modal.querySelector("#installGuideClose").onclick = close;
    modal.querySelector("#installGuideZoomIn").onclick = () => setScale(scale + 0.5);
    modal.querySelector("#installGuideZoomOut").onclick = () => setScale(scale - 0.5);
    modal.querySelector("#installGuideZoomReset").onclick = () => setScale(1);

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.id === "installGuideViewport") close();
    });

    modal.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        setScale(scale + (event.deltaY < 0 ? 0.25 : -0.25));
      },
      { passive: false }
    );

    modal.addEventListener(
      "touchstart",
      (event) => {
        event.stopPropagation();
        if (event.touches.length === 1) {
          lastX = event.touches[0].clientX;
          lastY = event.touches[0].clientY;
        } else if (event.touches.length === 2) {
          startDistance = distance(event.touches);
          startScale = scale;
        }
      },
      { passive: false }
    );

    modal.addEventListener(
      "touchmove",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.touches.length === 1 && scale > 1) {
          const touch = event.touches[0];
          x += touch.clientX - lastX;
          y += touch.clientY - lastY;
          lastX = touch.clientX;
          lastY = touch.clientY;
          render();
        } else if (event.touches.length === 2 && startDistance > 0) {
          setScale(startScale * (distance(event.touches) / startDistance));
        }
      },
      { passive: false }
    );

    modal.addEventListener(
      "touchend",
      (event) => {
        event.stopPropagation();
      },
      { passive: false }
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) close();
    });
  }

  function bind() {
    const btn = document.getElementById("installGuideBtn");
    if (!btn || btn.dataset.guideBound) return;

    btn.dataset.guideBound = "1";
    btn.onclick = openGuide;
  }

  document.addEventListener(
    "click",
    (event) => {
      if (event.target && (event.target.id === "settingsBtn" || event.target.closest("#settingsBtn"))) {
        setTimeout(bind, 80);
        setTimeout(bind, 250);
      }
    },
    true
  );

  const panel = document.getElementById("settingsPanel");
  if (panel) {
    new MutationObserver(() => {
      if (panel.classList.contains("open")) setTimeout(bind, 50);
    }).observe(panel, { childList: true, subtree: true, attributes: true });
  }
})();
