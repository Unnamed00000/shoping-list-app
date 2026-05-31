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
      overscroll-behavior-y: none;
      -webkit-text-size-adjust: 100%;
      -webkit-overflow-scrolling: touch;
    }

    body {
      position: relative;
      touch-action: pan-y;
    }

    .app {
      max-width: 100%;
      overflow: visible !important;
      touch-action: pan-y;
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

  let touchStartY = 0;

  function getScrollableElement(start) {
    let element = start instanceof Element ? start : start && start.parentElement;

    while (element && element !== document.body && element !== document.documentElement) {
      const style = window.getComputedStyle(element);
      const canScrollY = /(auto|scroll)/.test(style.overflowY);

      if (canScrollY && element.scrollHeight > element.clientHeight) {
        return element;
      }

      element = element.parentElement;
    }

    return document.scrollingElement || document.documentElement;
  }

  function shouldStopEdgeBounce(scroller, deltaY) {
    const scrollTop = scroller.scrollTop;
    const maxScrollTop = scroller.scrollHeight - scroller.clientHeight;

    if (maxScrollTop <= 0) return true;
    if (scrollTop <= 0 && deltaY > 0) return true;
    if (scrollTop >= maxScrollTop - 1 && deltaY < 0) return true;

    return false;
  }

  document.addEventListener(
    "touchstart",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
        return;
      }

      touchStartY = event.touches[0].clientY;
    },
    { passive: false }
  );

  document.addEventListener(
    "touchmove",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
        return;
      }

      const currentY = event.touches[0].clientY;
      const deltaY = currentY - touchStartY;
      const scroller = getScrollableElement(event.target);

      if (shouldStopEdgeBounce(scroller, deltaY)) {
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
      if (event.ctrlKey) event.preventDefault();
    },
    { passive: false }
  );
})();
