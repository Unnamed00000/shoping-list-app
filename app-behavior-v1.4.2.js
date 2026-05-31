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
      min-height: 100%;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      overscroll-behavior-x: none;
      overscroll-behavior-y: auto;
      -webkit-text-size-adjust: 100%;
      -webkit-overflow-scrolling: touch;
    }

    body {
      position: relative;
    }

    .app {
      max-width: 100%;
      overflow: visible !important;
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
    }
  `;

  document.head.appendChild(style);
})();