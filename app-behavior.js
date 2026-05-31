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

    body {
      position: relative;
      touch-action: pan-y;
    }

    .app {
      max-width: 100%;
      overflow: visible !important;
      touch-action: pan-y;
      scrollbar-width: none;
      -ms-overflow-style: none;
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

  let lastTouchY = 0;

  function getPageScroller() {
    return document.scrollingElement || document.documentElement;
  }

  function isInsideOverlay(target) {
    const element = target instanceof Element ? target : target && target.parentElement;
    return !!(element && element.closest(".settings-panel.open, #installGuideModal.open"));
  }

  function scrollPageBy(deltaY) {
    const scroller = getPageScroller();
    const maxScrollTop = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    const nextScrollTop = Math.min(maxScrollTop, Math.max(0, scroller.scrollTop + deltaY));
    scroller.scrollTop = nextScrollTop;
  }

  function normalizeWheelDelta(event) {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
    return event.deltaY;
  }

  document.addEventListener(
    "touchstart",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
        return;
      }

      if (!isInsideOverlay(event.target)) {
        lastTouchY = event.touches[0].clientY;
      }
    },
    { passive: false, capture: true }
  );

  document.addEventListener(
    "touchmove",
    event => {
      if (event.touches.length > 1) {
        event.preventDefault();
        return;
      }

      if (isInsideOverlay(event.target)) {
        return;
      }

      const currentY = event.touches[0].clientY;
      scrollPageBy(lastTouchY - currentY);
      lastTouchY = currentY;
      event.preventDefault();
    },
    { passive: false, capture: true }
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

      if (!isInsideOverlay(event.target)) {
        scrollPageBy(normalizeWheelDelta(event));
        event.preventDefault();
      }
    },
    { passive: false, capture: true }
  );
})();
