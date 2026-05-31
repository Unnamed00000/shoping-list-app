(() => {
  const style = document.createElement("style");

  style.textContent = `
    html,
    body {
      max-width: 100%;
      overflow-x: hidden !important;
      overscroll-behavior-x: none;
      overscroll-behavior-y: none;
      touch-action: pan-y;
    }

    .app,
    .card,
    .list-section,
    .purchase-card,
    .summary,
    .items-list,
    .history-list {
      touch-action: pan-y;
    }

    button,
    input,
    select,
    textarea,
    a {
      touch-action: manipulation;
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

  document.addEventListener("gesturestart", event => event.preventDefault());
  document.addEventListener("gesturechange", event => event.preventDefault());
  document.addEventListener("gestureend", event => event.preventDefault());
})();