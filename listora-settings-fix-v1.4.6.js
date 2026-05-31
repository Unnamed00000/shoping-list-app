(() => {
  const APP_NAME = "Listora";
  const APP_URL = "https://unnamed00000.github.io/shoping-list-app/";

  function getFooterVersion() {
    const footerLines = document.querySelectorAll(".app-footer p");
    return (footerLines[1] && footerLines[1].textContent.trim()) || "v1.4.7";
  }

  function applyListoraSettingsFix() {
    const sheet = document.querySelector("#settingsPanel .settings-sheet");
    if (!sheet) return;

    const about = sheet.querySelector(".about-center");
    if (about) {
      const strong = about.querySelector("strong");
      if (strong) strong.textContent = APP_NAME;

      about.querySelectorAll("span").forEach((span) => {
        span.textContent = span.textContent
          .replace("Shopping List App", APP_NAME)
          .replace(/v\d+\.\d+\.\d+/g, getFooterVersion());
      });
    }

    const shareBtn = document.getElementById("shareAppBtn");
    if (shareBtn && !shareBtn.dataset.listoraShareFixed) {
      shareBtn.dataset.listoraShareFixed = "1";
      shareBtn.onclick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: APP_NAME,
              text: APP_NAME,
              url: APP_URL
            });
          } catch (e) {}
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(APP_URL);
          const note = document.getElementById("settingsNote");
          if (note) {
            note.textContent = "Ссылка скопирована";
            note.style.display = "block";
            setTimeout(() => (note.style.display = "none"), 3000);
          }
        }
      };
    }
  }

  document.addEventListener(
    "click",
    (event) => {
      if (event.target && (event.target.id === "settingsBtn" || event.target.closest("#settingsBtn"))) {
        setTimeout(applyListoraSettingsFix, 80);
        setTimeout(applyListoraSettingsFix, 250);
      }
    },
    true
  );

  const panel = document.getElementById("settingsPanel");
  if (panel) {
    new MutationObserver(() => {
      if (panel.classList.contains("open")) setTimeout(applyListoraSettingsFix, 50);
    }).observe(panel, { childList: true, subtree: true, attributes: true });
  }

  setTimeout(applyListoraSettingsFix, 300);
})();
