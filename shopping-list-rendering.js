(() => {
  if (priceInput) {
    priceInput.removeAttribute("required");
    priceInput.value = "";
    priceInput.placeholder = "0";
  }

  const priceText = () => {
    const lang = state.language;
    if (lang === "ru") return "Цена";
    if (lang === "ka") return "ფასი";
    if (lang === "da") return "Pris";
    return "Price";
  };

  const cancelText = () => {
    const lang = state.language;
    if (lang === "ru") return "Отмена";
    if (lang === "ka") return "გაუქმება";
    if (lang === "da") return "Annuller";
    return "Cancel";
  };

  const deletedText = () => {
    const lang = state.language;
    if (lang === "ru") return "✓ Удалено";
    if (lang === "ka") return "✓ წაშლილია";
    if (lang === "da") return "✓ Slettet";
    return "✓ Deleted";
  };

  state.pendingDeleteId = null;
  state.historyMessage = "";

  const showHistoryMessage = (text) => {
    state.historyMessage = text;
    renderHistory();
    clearTimeout(window.__historyMessageTimer);
    window.__historyMessageTimer = setTimeout(() => {
      state.historyMessage = "";
      renderHistory();
    }, 3000);
  };

  window.changeItemPriceInline = (id, value) => {
    const cleanPrice = value === "" ? 0 : Math.max(0, Number(value || 0));
    state.items = state.items.map((item) => item.id === id ? { ...item, price: cleanPrice } : item);
    saveState();
    renderSummary();
    const item = state.items.find((item) => item.id === id);
    const totalNode = document.querySelector(`[data-item-total-id="${id}"]`);
    if (item && totalNode) totalNode.textContent = `${getDict().totalLabel}: ${formatMoney(itemTotal(item))}`;
  };

  window.askDeleteReceiptInline = (id) => {
    state.pendingDeleteId = id;
    renderHistory();
  };

  window.cancelDeleteReceiptInline = () => {
    state.pendingDeleteId = null;
    renderHistory();
  };

  window.confirmDeleteReceiptInline = (id) => {
    state.history = state.history.filter((receipt) => receipt.id !== id);
    state.selectedHistoryIds.delete(id);
    state.pendingDeleteId = null;
    saveState();
    renderHistory();
    renderSelectedHistoryTotal();
    updateStoreList();
    showHistoryMessage(deletedText());
  };

  renderItems = function () {
    if (!itemsList || !emptyState) return;
    const d = getDict();
    itemsList.innerHTML = "";
    emptyState.style.display = state.items.length ? "none" : "block";

    state.items.forEach((item) => {
      const article = document.createElement("article");
      article.className = `item-card ${item.done ? "done" : ""}`;
      const priceValue = Number(item.price || 0) > 0 ? Number(item.price || 0) : "";
      article.innerHTML = `
        <input class="check" type="checkbox" ${item.done ? "checked" : ""} aria-label="${d.boughtItems}" />
        <div>
          <h3 class="item-name"></h3>
          <div class="item-edit-row">
            <div>
              <div class="item-edit-label">${priceText()}</div>
              <input class="inline-price-input" type="number" min="0" step="0.01" value="${priceValue}" placeholder="0" inputmode="decimal" />
            </div>
            <div>
              <div class="item-edit-label">${d.quantityLabel}</div>
              <div class="quantity-control" aria-label="${d.quantityLabel}">
                <button class="qty-btn minus-btn" type="button" aria-label="${d.minusLabel}">−</button>
                <span class="qty-number">${Number(item.quantity || 1)}</span>
                <button class="qty-btn plus-btn" type="button" aria-label="${d.plusLabel}">+</button>
              </div>
            </div>
            <div class="item-total item-total-inline" data-item-total-id="${item.id}">${d.totalLabel}: ${formatMoney(itemTotal(item))}</div>
          </div>
        </div>
        <button class="delete-btn" type="button" aria-label="${d.deleteLabel}">×</button>`;

      article.querySelector(".item-name").textContent = item.name || "";
      article.querySelector(".check").addEventListener("change", () => toggleItem(item.id));
      article.querySelector(".minus-btn").addEventListener("click", () => changeQuantity(item.id, -1));
      article.querySelector(".plus-btn").addEventListener("click", () => changeQuantity(item.id, 1));
      article.querySelector(".delete-btn").addEventListener("click", () => deleteItem(item.id));
      article.querySelector(".inline-price-input").addEventListener("input", (event) => window.changeItemPriceInline(item.id, event.target.value));
      itemsList.appendChild(article);
    });
  };

  renderHistory = function () {
    if (!historyList || !historyEmpty) return;
    const d = getDict();
    historyList.innerHTML = "";

    if (state.historyMessage) {
      const message = document.createElement("div");
      message.textContent = state.historyMessage;
      message.style.cssText = "margin:0 0 12px;padding:12px 14px;border-radius:16px;background:#dcfce7;color:#16a34a;font-weight:900;text-align:center";
      historyList.appendChild(message);
    }

    historyEmpty.style.display = state.history.length ? "none" : "block";

    state.history.forEach((receipt) => {
      const card = document.createElement("article");
      card.className = "history-card";
      const checked = state.selectedHistoryIds.has(receipt.id) ? "checked" : "";
      const itemsHtml = (receipt.items || [])
        .map((item) => `<span>${escapeHtml(item.name)} — ${item.quantity} × ${formatMoney(item.price)} = ${formatMoney(itemTotal(item))}</span>`)
        .join("");
      const pending = state.pendingDeleteId === receipt.id;
      const confirmHtml = pending
        ? `<div style="margin-top:12px;padding:12px;border-radius:16px;background:#fef2f2;color:#991b1b;font-weight:900;text-align:center"><div style="margin-bottom:10px">${d.confirmDelete}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="history-action-btn cancel-delete-btn" type="button">${cancelText()}</button><button class="history-action-btn confirm-delete-btn" type="button" style="background:#fee2e2;color:#991b1b">🗑 ${d.deleteReceipt}</button></div></div>`
        : "";

      card.innerHTML = `<input class="check history-check" type="checkbox" ${checked}/><div><h3>${escapeHtml(receipt.store)}</h3><div class="history-meta">${escapeHtml(receipt.date)} · ${d.receiptItems}: ${receiptQuantity(receipt)}</div><div class="history-items">${itemsHtml}</div><div class="history-total-line">${d.totalLabel}: ${formatMoney(receiptTotal(receipt))}</div><div class="history-actions"><button class="history-action-btn share-btn" type="button">📤 ${d.share}</button><button class="history-action-btn print-btn" type="button">🖨 ${d.print}</button><button class="history-action-btn delete-history-btn" type="button">🗑 ${d.deleteReceipt}</button></div>${confirmHtml}</div>`;

      card.querySelector(".history-check").addEventListener("change", (event) => toggleReceiptSelection(receipt.id, event.target.checked));
      card.querySelector(".share-btn").addEventListener("click", () => shareReceipt(receipt));
      card.querySelector(".print-btn").addEventListener("click", () => printReceipt(receipt));
      card.querySelector(".delete-history-btn").addEventListener("click", () => window.askDeleteReceiptInline(receipt.id));

      if (pending) {
        card.querySelector(".cancel-delete-btn").addEventListener("click", window.cancelDeleteReceiptInline);
        card.querySelector(".confirm-delete-btn").addEventListener("click", () => window.confirmDeleteReceiptInline(receipt.id));
      }

      historyList.appendChild(card);
    });

    renderSelectedHistoryTotal();
  };

  renderItems();
  renderSummary();
  renderHistory();
})();

(() => {
  function forceOpenHistory(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const panel = document.getElementById("historyPanel");
    if (!panel) return;

    try {
      if (typeof closeSettings === "function") closeSettings();
      if (typeof renderHistory === "function") renderHistory();
    } catch (e) {}

    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    panel.style.display = "flex";
    panel.style.opacity = "1";
    panel.style.pointerEvents = "auto";
    panel.style.visibility = "visible";
    panel.style.zIndex = "9999";
  }

  function forceCloseHistory(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const panel = document.getElementById("historyPanel");
    if (!panel) return;

    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    panel.style.display = "";
    panel.style.opacity = "";
    panel.style.pointerEvents = "";
    panel.style.visibility = "";
    panel.style.zIndex = "";
  }

  function bindHistoryButtons() {
    const openBtn = document.getElementById("openHistoryBtn");
    const closeBtn = document.getElementById("closeHistoryBtn");
    const panel = document.getElementById("historyPanel");

    if (openBtn) {
      openBtn.onclick = forceOpenHistory;
      openBtn.addEventListener("click", forceOpenHistory, true);
    }

    if (closeBtn) {
      closeBtn.onclick = forceCloseHistory;
      closeBtn.addEventListener("click", forceCloseHistory, true);
    }

    if (panel) {
      panel.addEventListener("click", (event) => {
        if (event.target === panel) forceCloseHistory(event);
      }, true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindHistoryButtons);
  } else {
    bindHistoryButtons();
  }

  window.forceOpenHistory = forceOpenHistory;
})();
