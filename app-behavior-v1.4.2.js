(() => {
  const style = document.createElement("style");

  style.textContent = `
    html,
    body {
      max-width: 100%;
      overflow-x: hidden !important;
      overscroll-behavior-x: none;
    }

    .app,
    .topbar,
    .app-footer,
    .settings-panel,
    .settings-sheet {
      max-width: 100%;
      overflow-x: hidden;
    }
  `;

  document.head.appendChild(style);
})();
