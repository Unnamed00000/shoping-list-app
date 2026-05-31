(() => {
  const CURRENCY_KEY = "listoraCurrency";

  const currencyOptions = {
    DKK: { symbol: "kr", position: "after", label: "DKK kr" },
    EUR: { symbol: "€", position: "before", label: "EUR €" },
    USD: { symbol: "$", position: "before", label: "USD $" },
    GBP: { symbol: "£", position: "before", label: "GBP £" },
    RUB: { symbol: "₽", position: "after", label: "RUB ₽" },
    GEL: { symbol: "₾", position: "after", label: "GEL ₾" }
  };

  if (!localStorage.getItem(CURRENCY_KEY)) {
    localStorage.setItem(CURRENCY_KEY, "DKK");
  }

  function getCurrency() {
    return currencyOptions[localStorage.getItem(CURRENCY_KEY)] || currencyOptions.DKK;
  }

  function formatByCurrency(value) {
    const c = getCurrency();
    const lang = (window.state && state.language) || localStorage.getItem("shoppingLanguage") || "en";

    const loc =
      lang === "ru" ? "ru-RU" :
      lang === "ka" ? "ka-GE" :
      lang === "da" ? "da-DK" :
      "en-US";

    const n = Number(value || 0);

    const val = n.toLocaleString(loc, {
      minimumFractionDigits: n % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    });

    return c.position === "before" ? `${c.symbol}${val}` : `${val} ${c.symbol}`;
  }

  try {
    window.formatMoney = formatByCurrency;
    formatMoney = formatByCurrency;
  } catch (e) {}

  const style = document.createElement("style");
  style.textContent = `
    .listora-language-currency-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      align-items: end;
    }

    .listora-mini-label {
      display: block;
      margin: 0 0 7px;
      color: var(--muted);
      font-size: .78rem;
      font-weight: 900;
    }

    .listora-currency-select {
      width: 100%;
      min-height: 48px;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 11px 12px;
      background: #fff;
      color: #0f172a;
      font-weight: 900;
    }

    body.theme-dark .listora-currency-select,
    body:not(.theme-light) .listora-currency-select {
      background: #0f172a;
      color: #f8fafc;
      border-color: #334155;
    }

    .listora-language-currency-row .language-current {
      min-height: 48px;
      padding: 11px 12px;
    }

    @media (max-width: 390px) {
      .listora-language-currency-row {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  function currentLang() {
    return (window.state && state.language) || localStorage.getItem("shoppingLanguage") || "en";
  }

  function languageWord() {
    const lang = currentLang();

    if (lang === "ru") return "Язык приложения";
    if (lang === "da") return "App-sprog";
    if (lang === "ka") return "აპის ენა";

    return "App language";
  }

  function currencyWord() {
    const lang = currentLang();

    if (lang === "ru") return "Валюта";
    if (lang === "da") return "Valuta";
    if (lang === "ka") return "ვალუტა";

    return "Currency";
  }

  function titleWord() {
    const lang = currentLang();

    if (lang === "ru") return "Язык и валюта";
    if (lang === "da") return "Sprog og valuta";
    if (lang === "ka") return "ენა და ვალუტა";

    return "Language and currency";
  }

  function fixAboutName() {
    const about = document.querySelector(".about-center");
    if (!about) return;

    const strong = about.querySelector("strong");
    if (strong) strong.textContent = "Listora";

    about.querySelectorAll("span").forEach
