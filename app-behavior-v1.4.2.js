(() => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
    );
  }

  const style = document.createElement("style");

  style.textContent = `
    html,
    body {
      max-width: 100%;
      width: 100%;
      height: 100%;
      min-height: 100%;
      overflow-x: hidden !important;
      overflow-y: hidden !important;
      overscroll-behavior-x: none;
      overscroll-behavior-y: none;
      -webkit-text-size-adjust: 100%;
      -webkit-overflow-scrolling: touch;
    }

    body {
      position: relative;
      touch-action: pan-y;
    }

    .app {
      position: fixed;
      top: var(--topbar-height);
      right: 0;
      bottom: var(--footer-height);
      left: 0;
      max-width: 100%;
      width: min(100%, 760px);
      margin: 0 auto;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      touch-action: pan-y;
      overscroll-behavior-y: contain;
      -webkit-overflow-scrolling: touch;
    }

    .card,
    .list-section,
    .purchase-card,
    .summary,
    .items-list,
    .history-list,
    .item-card,
    .summary-card {
      max-width: 100%;
      overflow-x: visible !important;
    }

    .topbar,
    .app-footer,
    .settings-panel,
    .settings-sheet {
      max-width: 100%;
      overflow-x: hidden;
    }

    .settings-sheet,
    .history-sheet {
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-y;
    }

    button,
    input,
    select,
    textarea,
    label,
    .qty-btn,
    .check {
      touch-action: manipulation;
    }
  `;

  document.head.appendChild(style);

  function getMainScroller() {
    return document.querySelector(".app");
  }

  document.addEventListener(
    "touchstart",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener(
    "touchmove",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  ["gesturestart", "gesturechange", "gestureend"].forEach(type => {
    document.addEventListener(type, event => event.preventDefault(), { passive: false });
  });

  document.addEventListener("dblclick", event => event.preventDefault(), { passive: false });

  window.addEventListener(
    "wheel",
    event => {
      if (event.ctrlKey) {
        event.preventDefault();
        return;
      }

      if (event.target.closest(".topbar, .app-footer")) {
        const scroller = getMainScroller();
        if (scroller) {
          scroller.scrollTop += event.deltaY;
          event.preventDefault();
        }
      }
    },
    { passive: false }
  );
})();
