(() => {
  function forceOpenHistory(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const panel = document.getElementById('historyPanel');
    if (!panel) return;

    try {
      if (typeof closeSettings === 'function') closeSettings();
      if (typeof renderHistory === 'function') renderHistory();
    } catch (e) {}

    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    panel.style.display = 'flex';
    panel.style.opacity = '1';
    panel.style.pointerEvents = 'auto';
    panel.style.visibility = 'visible';
    panel.style.zIndex = '9999';
  }

  function forceCloseHistory(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const panel = document.getElementById('historyPanel');
    if (!panel) return;

    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    panel.style.display = '';
    panel.style.opacity = '';
    panel.style.pointerEvents = '';
    panel.style.visibility = '';
    panel.style.zIndex = '';
  }

  function bindHistoryButtons() {
    const openBtn = document.getElementById('openHistoryBtn');
    const closeBtn = document.getElementById('closeHistoryBtn');
    const panel = document.getElementById('historyPanel');

    if (openBtn) {
      openBtn.onclick = forceOpenHistory;
      openBtn.addEventListener('click', forceOpenHistory, true);
    }

    if (closeBtn) {
      closeBtn.onclick = forceCloseHistory;
      closeBtn.addEventListener('click', forceCloseHistory, true);
    }

    if (panel) {
      panel.addEventListener('click', (event) => {
        if (event.target === panel) forceCloseHistory(event);
      }, true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindHistoryButtons);
  } else {
    bindHistoryButtons();
  }

  window.forceOpenHistory = forceOpenHistory;
})();
