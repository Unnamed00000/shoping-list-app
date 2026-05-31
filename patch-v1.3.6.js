(() => {
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

  renderHistory();
})();
