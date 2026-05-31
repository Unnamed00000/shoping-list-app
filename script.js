const APP_VERSION = "1.3.1";

const translations = {
  en: {
    htmlLang: "en",
    eyebrow: "Smart shopping",
    title: "Shopping List",
    settingsTitle: "Settings",
    languageLabel: "Language",
    addTitle: "Add product",
    productName: "Product",
    priceOne: "Price for 1 item",
    quantity: "Quantity",
    addButton: "+ Add",
    totalItems: "Total quantity",
    boughtItems: "Bought quantity",
    spent: "Spent",
    listTitle: "Products",
    clear: "Clear",
    empty: "No products yet.",
    priceLabel: "Price for 1 item",
    quantityLabel: "Quantity",
    totalLabel: "Total",
    deleteLabel: "Delete",
    minusLabel: "Decrease quantity",
    plusLabel: "Increase quantity",
    defaultProduct: "Milk",
    purchaseTitle: "Complete purchase",
    storeName: "Store",
    purchaseDate: "Date",
    savePurchase: "Save purchase to history",
    openHistory: "Purchase history",
    historyTitle: "Purchase history",
    historyEmpty: "No saved purchases yet.",
    selectedTotal: "Selected total",
    share: "Share",
    print: "Print / PDF",
    receiptItems: "Items",
    saved: "Purchase saved",
    needStore: "Enter store name",
    needItems: "Add at least one product",
    selectedReceipts: "Selected receipts",
    copied: "Copied"
  },
  ru: {
    htmlLang: "ru",
    eyebrow: "Умные покупки",
    title: "Список покупок",
    settingsTitle: "Настройки",
    languageLabel: "Язык",
    addTitle: "Добавить товар",
    productName: "Товар",
    priceOne: "Цена за 1 штуку",
    quantity: "Количество",
    addButton: "+ Добавить",
    totalItems: "Общее количество",
    boughtItems: "Куплено штук",
    spent: "Потрачено",
    listTitle: "Товары",
    clear: "Очистить",
    empty: "Пока товаров нет.",
    priceLabel: "Цена за 1 шт",
    quantityLabel: "Количество",
    totalLabel: "Итого",
    deleteLabel: "Удалить",
    minusLabel: "Уменьшить количество",
    plusLabel: "Увеличить количество",
    defaultProduct: "Молоко",
    purchaseTitle: "Завершить покупку",
    storeName: "Магазин",
    purchaseDate: "Дата",
    savePurchase: "Сохранить покупку в историю",
    openHistory: "История покупок",
    historyTitle: "История покупок",
    historyEmpty: "Сохранённых покупок пока нет.",
    selectedTotal: "Итог выбранных",
    share: "Поделиться",
    print: "Печать / PDF",
    receiptItems: "Товары",
    saved: "Покупка сохранена",
    needStore: "Укажи магазин",
    needItems: "Добавь хотя бы один товар",
    selectedReceipts: "Выбрано чеков",
    copied: "Скопировано"
  },
  ka: {
    htmlLang: "ka",
    eyebrow: "ჭკვიანი საყიდლები",
    title: "საყიდლების სია",
    settingsTitle: "პარამეტრები",
    languageLabel: "ენა",
    addTitle: "პროდუქტის დამატება",
    productName: "პროდუქტი",
    priceOne: "ფასი 1 ცალზე",
    quantity: "რაოდენობა",
    addButton: "+ დამატება",
    totalItems: "სრული რაოდენობა",
    boughtItems: "ნაყიდი რაოდენობა",
    spent: "დახარჯულია",
    listTitle: "პროდუქტები",
    clear: "გასუფთავება",
    empty: "პროდუქტები ჯერ არ არის.",
    priceLabel: "ფასი 1 ცალზე",
    quantityLabel: "რაოდენობა",
    totalLabel: "ჯამი",
    deleteLabel: "წაშლა",
    minusLabel: "რაოდენობის შემცირება",
    plusLabel: "რაოდენობის გაზრდა",
    defaultProduct: "რძე",
    purchaseTitle: "შენაძენის დასრულება",
    storeName: "მაღაზია",
    purchaseDate: "თარიღი",
    savePurchase: "ისტორიაში შენახვა",
    openHistory: "შენაძენების ისტორია",
    historyTitle: "შენაძენების ისტორია",
    historyEmpty: "შენახული შენაძენები ჯერ არ არის.",
    selectedTotal: "არჩეულის ჯამი",
    share: "გაზიარება",
    print: "ბეჭდვა / PDF",
    receiptItems: "პროდუქტები",
    saved: "შენაძენი შენახულია",
    needStore: "მიუთითე მაღაზია",
    needItems: "დაამატე მინიმუმ ერთი პროდუქტი",
    selectedReceipts: "არჩეული ჩეკები",
    copied: "დაკოპირდა"
  },
  da: {
    htmlLang: "da",
    eyebrow: "Smart indkøb",
    title: "Indkøbsliste",
    settingsTitle: "Indstillinger",
    languageLabel: "Sprog",
    addTitle: "Tilføj vare",
    productName: "Vare",
    priceOne: "Pris for 1 stk",
    quantity: "Antal",
    addButton: "+ Tilføj",
    totalItems: "Antal i alt",
    boughtItems: "Købt antal",
    spent: "Brugt",
    listTitle: "Varer",
    clear: "Ryd",
    empty: "Ingen varer endnu.",
    priceLabel: "Pris for 1 stk",
    quantityLabel: "Antal",
    totalLabel: "I alt",
    deleteLabel: "Slet",
    minusLabel: "Reducer antal",
    plusLabel: "Øg antal",
    defaultProduct: "Mælk",
    purchaseTitle: "Afslut køb",
    storeName: "Butik",
    purchaseDate: "Dato",
    savePurchase: "Gem køb i historik",
    openHistory: "Købshistorik",
    historyTitle: "Købshistorik",
    historyEmpty: "Ingen gemte køb endnu.",
    selectedTotal: "Valgt total",
    share: "Del",
    print: "Print / PDF",
    receiptItems: "Varer",
    saved: "Køb gemt",
    needStore: "Indtast butik",
    needItems: "Tilføj mindst én vare",
    selectedReceipts: "Valgte kvitteringer",
    copied: "Kopieret"
  }
};

const currencies = {
  en: { symbol: "€", position: "before" },
  ru: { symbol: "₽", position: "after" },
  ka: { symbol: "₾", position: "after" },
  da: { symbol: "kr", position: "after" }
};

const storageKey = "shopping-list-app-v1";
const historyStorageKey = "shopping-list-history-v1";

function safeParseArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    localStorage.removeItem(key);
    return [];
  }
}

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const state = {
  language: localStorage.getItem("shoppingLanguage") || "en",
  items: safeParseArray(storageKey),
  history: safeParseArray(historyStorageKey),
  selectedHistoryIds: new Set()
};

if (!translations[state.language]) state.language = "en";

const $ = (id) => document.getElementById(id);

const itemForm = $("itemForm");
const nameInput = $("name");
const priceInput = $("price");
const quantityInput = $("quantity");
const storeNameInput = $("storeName");
const purchaseDateInput = $("purchaseDate");
const savePurchaseBtn = $("savePurchaseBtn");
const itemsList = $("itemsList");
const emptyState = $("emptyState");
const totalItems = $("totalItems");
const boughtItems = $("boughtItems");
const spentMoney = $("spentMoney");
const clearBtn = $("clearBtn");
const settingsBtn = $("settingsBtn");
const closeSettingsBtn = $("closeSettingsBtn");
const settingsPanel = $("settingsPanel");
const languageButtons = document.querySelectorAll(".language-option");
const openHistoryBtn = $("openHistoryBtn");
const historyPanel = $("historyPanel");
const closeHistoryBtn = $("closeHistoryBtn");
const historyList = $("historyList");
const historyEmpty = $("historyEmpty");
const selectedHistoryTotal = $("selectedHistoryTotal");
const printArea = $("printArea");

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

if (purchaseDateInput && !purchaseDateInput.value) purchaseDateInput.value = todayISO();

function getDict() {
  return translations[state.language] || translations.en;
}

function formatMoney(value) {
  const currency = currencies[state.language] || currencies.en;
  const locale = state.language === "ru" ? "ru-RU" : state.language === "ka" ? "ka-GE" : state.language === "da" ? "da-DK" : "en-US";
  const number = Number(value || 0);
  const cleanValue = number.toLocaleString(locale, {
    minimumFractionDigits: number % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  });
  return currency.position === "before" ? `${currency.symbol}${cleanValue}` : `${cleanValue} ${currency.symbol}`;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state.items));
  localStorage.setItem(historyStorageKey, JSON.stringify(state.history));
  localStorage.setItem("shoppingLanguage", state.language);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function applyLanguage() {
  const dict = getDict();
  document.documentElement.lang = dict.htmlLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });
  if (nameInput) nameInput.placeholder = dict.defaultProduct;
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.language);
  });
}

function itemTotal(item) {
  return Number(item.price || 0) * Number(item.quantity || 0);
}

function receiptTotal(receipt) {
  return (receipt.items || []).reduce((sum, item) => sum + itemTotal(item), 0);
}

function receiptQuantity(receipt) {
  return (receipt.items || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}

function renderItems() {
  if (!itemsList || !emptyState) return;
  const dict = getDict();
  itemsList.innerHTML = "";
  emptyState.style.display = state.items.length ? "none" : "block";

  state.items.forEach((item) => {
    const article = document.createElement("article");
    article.className = `item-card ${item.done ? "done" : ""}`;
    article.innerHTML = `
      <input class="check" type="checkbox" ${item.done ? "checked" : ""} aria-label="${dict.boughtItems}" />
      <div>
        <h3 class="item-name"></h3>
        <div class="item-details"><span>${dict.priceLabel}: ${formatMoney(item.price)}</span></div>
        <div class="quantity-control" aria-label="${dict.quantityLabel}">
          <button class="qty-btn minus-btn" type="button" aria-label="${dict.minusLabel}">−</button>
          <span class="qty-number">${Number(item.quantity || 1)}</span>
          <button class="qty-btn plus-btn" type="button" aria-label="${dict.plusLabel}">+</button>
        </div>
        <div class="item-total">${dict.totalLabel}: ${formatMoney(itemTotal(item))}</div>
      </div>
      <button class="delete-btn" type="button" aria-label="${dict.deleteLabel}">×</button>
    `;
    article.querySelector(".item-name").textContent = item.name || "";
    article.querySelector(".check").addEventListener("change", () => toggleItem(item.id));
    article.querySelector(".minus-btn").addEventListener("click", () => changeQuantity(item.id, -1));
    article.querySelector(".plus-btn").addEventListener("click", () => changeQuantity(item.id, 1));
    article.querySelector(".delete-btn").addEventListener("click", () => deleteItem(item.id));
    itemsList.appendChild(article);
  });
}

function renderSummary() {
  if (!totalItems || !boughtItems || !spentMoney) return;
  const totalQuantity = state.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const boughtQuantity = state.items.filter((item) => item.done).reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const spent = state.items.filter((item) => item.done).reduce((sum, item) => sum + itemTotal(item), 0);
  totalItems.textContent = totalQuantity;
  boughtItems.textContent = boughtQuantity;
  spentMoney.textContent = formatMoney(spent);
}

function renderHistory() {
  if (!historyList || !historyEmpty) return;
  const dict = getDict();
  historyList.innerHTML = "";
  historyEmpty.style.display = state.history.length ? "none" : "block";

  state.history.forEach((receipt) => {
    const card = document.createElement("article");
    card.className = "history-card";
    const checked = state.selectedHistoryIds.has(receipt.id) ? "checked" : "";
    const itemsHtml = (receipt.items || []).map((item) => `<span>${escapeHtml(item.name)} — ${item.quantity} × ${formatMoney(item.price)} = ${formatMoney(itemTotal(item))}</span>`).join("");
    card.innerHTML = `
      <input class="check history-check" type="checkbox" ${checked} />
      <div>
        <h3>${escapeHtml(receipt.store)}</h3>
        <div class="history-meta">${escapeHtml(receipt.date)} · ${dict.receiptItems}: ${receiptQuantity(receipt)}</div>
        <div class="history-items">${itemsHtml}</div>
        <div class="history-total-line">${dict.totalLabel}: ${formatMoney(receiptTotal(receipt))}</div>
        <div class="history-actions">
          <button class="history-action-btn share-btn" type="button">📤 ${dict.share}</button>
          <button class="history-action-btn print-btn" type="button">🖨 ${dict.print}</button>
        </div>
      </div>
    `;
    card.querySelector(".history-check").addEventListener("change", (event) => toggleReceiptSelection(receipt.id, event.target.checked));
    card.querySelector(".share-btn").addEventListener("click", () => shareReceipt(receipt));
    card.querySelector(".print-btn").addEventListener("click", () => printReceipt(receipt));
    historyList.appendChild(card);
  });
  renderSelectedHistoryTotal();
}

function renderSelectedHistoryTotal() {
  if (!selectedHistoryTotal) return;
  const selectedReceipts = state.history.filter((receipt) => state.selectedHistoryIds.has(receipt.id));
  const total = selectedReceipts.reduce((sum, receipt) => sum + receiptTotal(receipt), 0);
  selectedHistoryTotal.textContent = `${getDict().selectedReceipts}: ${selectedReceipts.length} · ${formatMoney(total)}`;
}

function render() {
  applyLanguage();
  renderItems();
  renderSummary();
  renderHistory();
  saveState();
}

function addItem(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);
  if (!name || price < 0 || quantity < 1) return;
  state.items.unshift({ id: makeId(), name, price, quantity, done: false });
  itemForm.reset();
  quantityInput.value = 1;
  nameInput.focus();
  render();
}

function toggleItem(id) {
  state.items = state.items.map((item) => item.id === id ? { ...item, done: !item.done } : item);
  render();
}

function changeQuantity(id, delta) {
  state.items = state.items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, Number(item.quantity || 1) + delta) } : item);
  render();
}

function deleteItem(id) {
  state.items = state.items.filter((item) => item.id !== id);
  render();
}

function savePurchase() {
  const dict = getDict();
  const store = storeNameInput.value.trim();
  const date = purchaseDateInput.value || todayISO();
  if (!store) return alert(dict.needStore);
  if (!state.items.length) return alert(dict.needItems);

  const receipt = {
    id: makeId(),
    store,
    date,
    items: state.items.map((item) => ({ ...item })),
    createdAt: new Date().toISOString()
  };

  state.history.unshift(receipt);
  state.selectedHistoryIds.add(receipt.id);
  state.items = [];
  storeNameInput.value = "";
  purchaseDateInput.value = todayISO();
  alert(dict.saved);
  render();
}

function toggleReceiptSelection(id, selected) {
  if (selected) state.selectedHistoryIds.add(id);
  else state.selectedHistoryIds.delete(id);
  renderSelectedHistoryTotal();
}

function receiptText(receipt) {
  const dict = getDict();
  const lines = ["Shopping List App", receipt.store, `${dict.purchaseDate}: ${receipt.date}`, "", `${dict.receiptItems}:`];
  (receipt.items || []).forEach((item) => {
    lines.push(`${item.name} — ${item.quantity} × ${formatMoney(item.price)} = ${formatMoney(itemTotal(item))}`);
  });
  lines.push("", `${dict.totalLabel}: ${formatMoney(receiptTotal(receipt))}`);
  return lines.join("\n");
}

async function shareReceipt(receipt) {
  const text = receiptText(receipt);
  if (navigator.share) {
    try {
      await navigator.share({ title: `${receipt.store} ${receipt.date}`, text });
    } catch (error) {}
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    alert(getDict().copied);
  } else {
    alert(text);
  }
}

function printReceipt(receipt) {
  if (!printArea) return;
  printArea.innerHTML = `<pre>${escapeHtml(receiptText(receipt))}</pre>`;
  window.print();
}

function openSettings() {
  settingsPanel.classList.add("open");
  settingsPanel.setAttribute("aria-hidden", "false");
}

function closeSettings() {
  settingsPanel.classList.remove("open");
  settingsPanel.setAttribute("aria-hidden", "true");
}

function openHistory() {
  closeSettings();
  historyPanel.classList.add("open");
  historyPanel.setAttribute("aria-hidden", "false");
  renderHistory();
}

function closeHistory() {
  historyPanel.classList.remove("open");
  historyPanel.setAttribute("aria-hidden", "true");
}

if (settingsBtn) settingsBtn.addEventListener("click", openSettings);
if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
if (settingsPanel) settingsPanel.addEventListener("click", (event) => { if (event.target === settingsPanel) closeSettings(); });
if (openHistoryBtn) openHistoryBtn.addEventListener("click", openHistory);
if (closeHistoryBtn) closeHistoryBtn.addEventListener("click", closeHistory);
if (historyPanel) historyPanel.addEventListener("click", (event) => { if (event.target === historyPanel) closeHistory(); });

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.language = button.dataset.lang;
    closeSettings();
    render();
  });
});

if (itemForm) itemForm.addEventListener("submit", addItem);
if (savePurchaseBtn) savePurchaseBtn.addEventListener("click", savePurchase);
if (clearBtn) clearBtn.addEventListener("click", () => { state.items = []; render(); });

render();
