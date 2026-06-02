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
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden !important;
      overscroll-behavior: none;
      -webkit-text-size-adjust: 100%;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    html::-webkit-scrollbar,
    body::-webkit-scrollbar,
    .app::-webkit-scrollbar,
    .settings-sheet::-webkit-scrollbar,
    .history-sheet::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }

    .app {
      position: fixed;
      left: 0;
      right: 0;
      top: var(--topbar-height);
      bottom: var(--footer-height);
      width: 100%;
      max-width: none;
      margin: 0;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      touch-action: pan-y;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .app > section,
    .app > .summary {
      width: min(100% - 24px, 760px);
      margin-left: auto;
      margin-right: auto;
    }

    .settings-sheet,
    .history-sheet {
      overflow-y: auto !important;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
      touch-action: pan-y;
      scrollbar-width: none;
      -ms-overflow-style: none;
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

  ["gesturestart", "gesturechange", "gestureend"].forEach((type) => {
    document.addEventListener(type, (event) => event.preventDefault(), { passive: false });
  });

  document.addEventListener("dblclick", (event) => event.preventDefault(), { passive: false });

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey) event.preventDefault();
    },
    { passive: false, capture: true }
  );
})();
