(() => {
  const APP_NAME = "Listora";
  const APP_URL = "https://unnamed00000.github.io/shoping-list-app/";

  function getFooterVersion() {
    const footerLines = document.querySelectorAll(".app-footer p");
    return (footerLines[1] && footerLines[1].textContent.trim()) || "v1.4.17";
  }

  function setTextIfChanged(element, text) {
    if (element && element.textContent !== text) element.textContent = text;
  }

  function applyListoraSettingsFix() {
    const sheet = document.querySelector("#settingsPanel .settings-sheet");
    if (!sheet) return;

    const about = sheet.querySelector(".about-center");
    if (about) {
      const strong = about.querySelector("strong");
      setTextIfChanged(strong, APP_NAME);

      about.querySelectorAll("span").forEach((span) => {
        const nextText = span.textContent
          .replace("Shopping List App", APP_NAME)
          .replace(/v\d+\.\d+\.\d+/g, getFooterVersion());
        setTextIfChanged(span, nextText);
      });
    }

    const shareBtn = document.getElementById("shareAppBtn");
    if (shareBtn && !shareBtn.dataset.listoraShareFixed) {
      shareBtn.dataset.listoraShareFixed = "1";
      shareBtn.onclick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: APP_NAME,
              text: APP_NAME,
              url: APP_URL
            });
          } catch (e) {}
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(APP_URL);
          const note = document.getElementById("settingsNote");
          if (note) {
            note.textContent = "Ссылка скопирована";
            note.style.display = "block";
            setTimeout(() => (note.style.display = "none"), 3000);
          }
        }
      };
    }
  }

  document.addEventListener(
    "click",
    (event) => {
      if (event.target && (event.target.id === "settingsBtn" || event.target.closest("#settingsBtn"))) {
        setTimeout(applyListoraSettingsFix, 80);
        setTimeout(applyListoraSettingsFix, 250);
      }
    },
    true
  );

  const panel = document.getElementById("settingsPanel");
  if (panel) {
    new MutationObserver(() => {
      if (panel.classList.contains("open")) setTimeout(applyListoraSettingsFix, 50);
    }).observe(panel, { childList: true, subtree: true, attributes: true });
  }

  setTimeout(applyListoraSettingsFix, 300);
})();

(() => {
  const IMAGE_SRC = "images/instruktion.png";

  function openGuide() {
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
