(() => {
  const copy = {
    en: {
      label: "Purchase help",
      title: "How to save a purchase",
      body: "Mark the products you bought with the checkbox. Then enter the store name and purchase date. Tap Save checked items to history, and Listora will save those selected products in Purchase history so you can open them later."
    },
    ru: {
      label: "Помощь по завершению покупки",
      title: "Как сохранить покупку",
      body: "Отметь галочкой товары, которые ты купил. Укажи магазин и дату покупки. Затем нажми «Сохранить отмеченные товары», и Listora сохранит выбранные товары в истории покупок, чтобы их можно было открыть позже."
    },
    ka: {
      label: "შენაძენის დასრულების დახმარება",
      title: "როგორ შეინახო შენაძენი",
      body: "მონიშნე ის პროდუქტები, რომლებიც იყიდე. მიუთითე მაღაზიის სახელი და ყიდვის თარიღი. შემდეგ დააჭირე მონიშნული პროდუქტების შენახვას, და Listora მათ შენაძენების ისტორიაში შეინახავს."
    },
    da: {
      label: "Hjælp til afslut køb",
      title: "Sådan gemmer du et køb",
      body: "Marker de varer, du har købt. Skriv butikkens navn og købsdatoen. Tryk derefter på Gem markerede varer, så gemmer Listora de valgte varer i købshistorikken, hvor du kan åbne dem senere."
    },
    de: {
      label: "Hilfe zum Einkauf abschließen",
      title: "So speicherst du einen Einkauf",
      body: "Markiere die Produkte, die du gekauft hast. Gib dann den Namen des Geschäfts und das Kaufdatum ein. Tippe auf Markierte Produkte speichern, und Listora speichert diese Produkte in der Einkaufshistorie, damit du sie später öffnen kannst."
    },
    ar: {
      label: "مساعدة إنهاء الشراء",
      title: "كيفية حفظ الشراء",
      body: "حدد المنتجات التي اشتريتها بعلامة الصح. ثم اكتب اسم المتجر وتاريخ الشراء. اضغط على حفظ المنتجات المحددة، وستحفظ Listora هذه المنتجات في سجل المشتريات لتتمكن من فتحها لاحقا."
    }
  };

  const currentCopy = () => copy[state.language] || copy.en;

  function ensureHelpCard() {
    let card = document.getElementById("purchaseHelpCard");
    if (card) return card;

    card = document.createElement("div");
    card.id = "purchaseHelpCard";
    card.className = "purchase-help-card";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-live", "polite");
    card.innerHTML = `
      <div class="purchase-help-head">
        <strong id="purchaseHelpTitle"></strong>
        <button id="purchaseHelpClose" class="purchase-help-close" type="button" aria-label="Close">X</button>
      </div>
      <p id="purchaseHelpBody"></p>
    `;

    const purchaseCard = document.querySelector(".purchase-card");
    if (purchaseCard) purchaseCard.insertBefore(card, purchaseCard.children[1] || null);
    return card;
  }

  function setHelpText(card) {
    const text = currentCopy();
    const title = card.querySelector("#purchaseHelpTitle");
    const body = card.querySelector("#purchaseHelpBody");
    const close = card.querySelector("#purchaseHelpClose");
    const button = document.getElementById("purchaseHelpBtn");

    if (title) title.textContent = text.title;
    if (body) body.textContent = text.body;
    if (button) button.setAttribute("aria-label", text.label);
    if (close) close.setAttribute("aria-label", "Close");
  }

  function openHelp() {
    const card = ensureHelpCard();
    setHelpText(card);
    card.classList.add("open");
  }

  function closeHelp() {
    const card = document.getElementById("purchaseHelpCard");
    if (card) card.classList.remove("open");
  }

  function bindPurchaseHelp() {
    const button = document.getElementById("purchaseHelpBtn");
    if (!button) return;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = ensureHelpCard();
      if (card.classList.contains("open")) {
        closeHelp();
      } else {
        openHelp();
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target && event.target.closest("#purchaseHelpClose")) {
        event.preventDefault();
        closeHelp();
      }
    });

    setHelpText(ensureHelpCard());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindPurchaseHelp);
  } else {
    bindPurchaseHelp();
  }
})();
