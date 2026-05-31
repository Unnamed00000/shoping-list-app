(() => {
  const style = document.createElement('style');
  style.textContent = `
    body.theme-dark .close-btn,
    body:not(.theme-light) .close-btn {
      background: #f8fafc !important;
      color: #0f172a !important;
      border: 1px solid rgba(255,255,255,.45) !important;
      opacity: 1 !important;
      text-shadow: none !important;
      font-weight: 950 !important;
    }

    body.theme-dark .history-action-btn,
    body:not(.theme-light) .history-action-btn {
      background: #334155 !important;
      color: #f8fafc !important;
      border: 1px solid #475569 !important;
      opacity: 1 !important;
      text-shadow: none !important;
      font-weight: 950 !important;
    }

    body.theme-dark .share-btn,
    body.theme-dark .print-btn,
    body.theme-dark .delete-history-btn,
    body:not(.theme-light) .share-btn,
    body:not(.theme-light) .print-btn,
    body:not(.theme-light) .delete-history-btn {
      background: #334155 !important;
      color: #ffffff !important;
      border: 1px solid #64748b !important;
      opacity: 1 !important;
    }

    body.theme-dark .confirm-delete-btn,
    body:not(.theme-light) .confirm-delete-btn {
      background: #fecaca !important;
      color: #7f1d1d !important;
      border: 1px solid #fca5a5 !important;
      opacity: 1 !important;
      font-weight: 950 !important;
    }

    body.theme-dark .cancel-delete-btn,
    body:not(.theme-light) .cancel-delete-btn {
      background: #e2e8f0 !important;
      color: #0f172a !important;
      border: 1px solid #cbd5e1 !important;
      opacity: 1 !important;
      font-weight: 950 !important;
    }

    body.theme-dark .history-total,
    body:not(.theme-light) .history-total {
      background: #020617 !important;
      color: #f8fafc !important;
      border: 1px solid #1e293b !important;
    }

    body.theme-dark .history-total span,
    body.theme-dark .history-total strong,
    body:not(.theme-light) .history-total span,
    body:not(.theme-light) .history-total strong {
      color: #f8fafc !important;
      opacity: 1 !important;
    }

    body.theme-dark .settings-action,
    body:not(.theme-light) .settings-action {
      background: #0f172a !important;
      color: #f8fafc !important;
      border-color: #475569 !important;
      opacity: 1 !important;
    }

    body.theme-dark .theme-slider span,
    body:not(.theme-light) .theme-slider span {
      color: #f8fafc !important;
      opacity: 1 !important;
    }

    body.theme-dark button,
    body:not(.theme-light) button {
      text-shadow: none !important;
    }
  `;
  document.head.appendChild(style);
})();
