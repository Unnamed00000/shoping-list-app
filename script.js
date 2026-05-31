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
    defaultProduct: "Milk"
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
    defaultProduct: "Молоко"
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
    defaultProduct: "რძე"
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
    defaultProduct: "Mælk"
  }
};

const currencies = {
  en: { symbol: "€", position: "before" },
  ru: { symbol: "₽", position: "after" },
  ka: { symbol: "₾", position: "after" },
  da: { symbol: "kr", position: "after" }
};

const storageKey = "shopping-list-app-v1";

const state = {
  language: localStorage.getItem("shoppingLanguage") || "en",
  items: JSON.parse(localStorage.getItem(storageKey) || "[]")
};

const itemForm = document.getElementById("itemForm");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const itemsList = document.getElementById("itemsList");
const emptyState = document.getElementById("emptyState");
const totalItems = document.getElementById("totalItems");
const boughtItems = document.getElementById("boughtItems");
const spentMoney = document.getElementById("spentMoney");
const clearBtn = document.getElementById("clearBtn");
const settingsBtn = document.getElementById("settingsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const languageButtons = document.querySelectorAll(".language-option");

function formatMoney(value) {
  const currency = currencies[state.language];
  const locale = state.language === "ru" ? "ru-RU" : state.language === "ka" ? "ka-GE" : state.language === "da" ? "da-DK" : "en-US";
  const cleanValue = Number(value || 0).toLocaleString(locale, {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  });

  return currency.position === "before" ? `${currency.symbol}${cleanValue}` : `${cleanValue} ${currency.symbol}`;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state.items));
  localStorage.setItem("shoppingLanguage", state.language);
}

function applyLanguage() {
  const dict = translations[state.language];
  document.documentElement.lang = dict.htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) element.textContent = dict[key];
  });

  nameInput.placeholder = dict.defaultProduct;

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.language);
  });
}

function renderItems() {
  const dict = translations[state.language];
  itemsList.innerHTML = "";
  emptyState.style.display = state.items.length ? "none" : "block";

  state.items.forEach((item) => {
    const total = item.price * item.quantity;
    const article = document.createElement("article");
    article.className = `item-card ${item.done ? "done" : ""}`;

    article.innerHTML = `
      <input class="check" type="checkbox" ${item.done ? "checked" : ""} aria-label="${dict.boughtItems}" />
      <div>
        <h3 class="item-name"></h3>
        <div class="item-details">
          <span>${dict.priceLabel}: ${formatMoney(item.price)}</span>
        </div>
        <div class="quantity-control" aria-label="${dict.quantityLabel}">
          <button class="qty-btn minus-btn" type="button" aria-label="${dict.minusLabel}">−</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn plus-btn" type="button" aria-label="${dict.plusLabel}">+</button>
        </div>
        <div class="item-total">${dict.totalLabel}: ${formatMoney(total)}</div>
      </div>
      <button class="delete-btn" type="button" aria-label="${dict.deleteLabel}">×</button>
    `;

    article.querySelector(".item-name").textContent = item.name;
    article.querySelector(".check").addEventListener("change", () => toggleItem(item.id));
    article.querySelector(".minus-btn").addEventListener("click", () => changeQuantity(item.id, -1));
    article.querySelector(".plus-btn").addEventListener("click", () => changeQuantity(item.id, 1));
    article.querySelector(".delete-btn").addEventListener("click", () => deleteItem(item.id));
    itemsList.appendChild(article);
  });
}

function renderSummary() {
  const totalQuantity = state.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const boughtQuantity = state.items
    .filter((item) => item.done)
    .reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const spent = state.items
    .filter((item) => item.done)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  totalItems.textContent = totalQuantity;
  boughtItems.textContent = boughtQuantity;
  spentMoney.textContent = formatMoney(spent);
}

function render() {
  applyLanguage();
  renderItems();
  renderSummary();
  saveState();
}

function addItem(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (!name || price < 0 || quantity < 1) return;

  state.items.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name,
    price,
    quantity,
    done: false
  });

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
  state.items = state.items.map((item) => {
    if (item.id !== id) return item;
    return { ...item, quantity: Math.max(1, Number(item.quantity || 1) + delta) };
  });
  render();
}

function deleteItem(id) {
  state.items = state.items.filter((item) => item.id !== id);
  render();
}

function openSettings() {
  settingsPanel.classList.add("open");
  settingsPanel.setAttribute("aria-hidden", "false");
}

function closeSettings() {
  settingsPanel.classList.remove("open");
  settingsPanel.setAttribute("aria-hidden", "true");
}

settingsBtn.addEventListener("click", openSettings);
closeSettingsBtn.addEventListener("click", closeSettings);
settingsPanel.addEventListener("click", (event) => {
  if (event.target === settingsPanel) closeSettings();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.language = button.dataset.lang;
    closeSettings();
    render();
  });
});

itemForm.addEventListener("submit", addItem);

clearBtn.addEventListener("click", () => {
  state.items = [];
  render();
});

render();
