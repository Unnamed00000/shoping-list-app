(() => {
  const APP_URL = "https://unnamed00000.github.io/shoping-list-app/";
  const SETTINGS_KEY = "shopping-list-settings-v138";
  const savedSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
  const prefs = {
    sound: savedSettings.sound ?? false,
    vibration: savedSettings.vibration ?? true,
    theme: savedSettings.theme || "dark"
  };

  const text = {
    en: {
      settings: "Settings",
      installShare: "Installation & Share",
      installAndroid: "Android: Install app",
      installIphone: "iPhone: Installation guide",
      shareApp: "Share app",
      language: "App language",
      soundVibration: "Sound & vibration",
      sound: "Sound",
      vibration: "Vibration",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      feedback: "Feedback",
      feedbackBody: "If you find an error, have a problem, or have suggestions to improve the app, contact us. We will try to help and answer your questions.",
      contacts: "Contacts:",
      comingSoon: "Coming soon, not available yet.",
      about: "About app",
      version: "Version",
      developer: "Developer",
      iphoneGuide: "On iPhone: open this page in Safari, tap Share, choose Add to Home Screen, then tap Add.",
      androidPromptUnavailable: "Android: if the install window does not appear, open Chrome menu and choose Install app.",
      androidInstalled: "Listora is already installed.",
      androidAccepted: "Installation started.",
      androidDismissed: "Installation was cancelled.",
      copied: "Link copied"
    },
    ru: {
      settings: "Настройки",
      installShare: "Установка и поделиться",
      installAndroid: "Android: Установить приложение",
      installIphone: "iPhone: Инструкция установки",
      shareApp: "Поделиться приложением",
      language: "Язык приложения",
      soundVibration: "Звук и вибрация",
      sound: "Звук",
      vibration: "Вибрация",
      theme: "Тема",
      light: "Светлая",
      dark: "Тёмная",
      feedback: "Обратная связь",
      feedbackBody: "Если вы обнаружили ошибку, столкнулись с проблемой или у вас есть предложения по улучшению приложения, свяжитесь с нами. Мы постараемся помочь и ответить на ваши вопросы.",
      contacts: "Контакты:",
      comingSoon: "Скоро появится, пока что нет.",
      about: "О приложении",
      version: "Версия",
      developer: "Разработчик",
      iphoneGuide: "На iPhone: открой ссылку в Safari, нажми Поделиться, выбери «На экран Домой», затем нажми «Добавить».",
      androidPromptUnavailable: "Android: если окно установки не появилось, открой меню Chrome и выбери «Установить приложение».",
      androidInstalled: "Listora уже установлена.",
      androidAccepted: "Установка началась.",
      androidDismissed: "Установка отменена.",
      copied: "Ссылка скопирована"
    },
    ka: {
      settings: "პარამეტრები",
      installShare: "დაყენება და გაზიარება",
      installAndroid: "Android: აპის დაყენება",
      installIphone: "iPhone: დაყენების ინსტრუქცია",
      shareApp: "აპის გაზიარება",
      language: "აპის ენა",
      soundVibration: "ხმა და ვიბრაცია",
      sound: "ხმა",
      vibration: "ვიბრაცია",
      theme: "თემა",
      light: "ღია",
      dark: "მუქი",
      feedback: "უკუკავშირი",
      feedbackBody: "თუ იპოვეთ შეცდომა, შეგექმნათ პრობლემა ან გაქვთ იდეა აპის გასაუმჯობესებლად, დაგვიკავშირდით. ვეცდებით დაგეხმაროთ და ვუპასუხოთ თქვენს კითხვებს.",
      contacts: "კონტაქტები:",
      comingSoon: "მალე გამოჩნდება, ჯერ არ არის.",
      about: "აპის შესახებ",
      version: "ვერსია",
      developer: "დეველოპერი",
      iphoneGuide: "iPhone-ზე: გახსენი ეს გვერდი Safari-ში, დააჭირე Share-ს, აირჩიე Add to Home Screen და შემდეგ Add.",
      androidPromptUnavailable: "Android-ზე: თუ დაყენების ფანჯარა არ გამოჩნდა, გახსენი Chrome-ის მენიუ და აირჩიე Install app.",
      androidInstalled: "Listora უკვე დაყენებულია.",
      androidAccepted: "დაყენება დაიწყო.",
      androidDismissed: "დაყენება გაუქმდა.",
      copied: "ბმული დაკოპირდა"
    },
    da: {
      settings: "Indstillinger",
      installShare: "Installation og deling",
      installAndroid: "Android: Installer app",
      installIphone: "iPhone: Installationsvejledning",
      shareApp: "Del app",
      language: "App-sprog",
      soundVibration: "Lyd og vibration",
      sound: "Lyd",
      vibration: "Vibration",
      theme: "Tema",
      light: "Lys",
      dark: "Mørk",
      feedback: "Feedback",
      feedbackBody: "Hvis du finder en fejl, oplever et problem eller har forslag til forbedring af appen, så kontakt os. Vi vil prøve at hjælpe og besvare dine spørgsmål.",
      contacts: "Kontakter:",
      comingSoon: "Kommer snart, ikke tilgængelig endnu.",
      about: "Om appen",
      version: "Version",
      developer: "Udvikler",
      iphoneGuide: "På iPhone: åbn siden i Safari, tryk på Del, vælg Føj til hjemmeskærm, og tryk på Tilføj.",
      androidPromptUnavailable: "Android: hvis installationsvinduet ikke vises, skal du åbne Chrome-menuen og vælge Installer app.",
      androidInstalled: "Listora er allerede installeret.",
      androidAccepted: "Installationen er startet.",
      androidDismissed: "Installationen blev annulleret.",
      copied: "Link kopieret"
    },
    de: {
      settings: "Einstellungen",
      installShare: "Installation und Teilen",
      installAndroid: "Android: App installieren",
      installIphone: "iPhone: Installationsanleitung",
      shareApp: "App teilen",
      language: "App-Sprache",
      soundVibration: "Ton und Vibration",
      sound: "Ton",
      vibration: "Vibration",
      theme: "Design",
      light: "Hell",
      dark: "Dunkel",
      feedback: "Feedback",
      feedbackBody: "Wenn du einen Fehler findest, ein Problem hast oder Vorschläge zur Verbesserung der App hast, kontaktiere uns. Wir versuchen zu helfen und deine Fragen zu beantworten.",
      contacts: "Kontakte:",
      comingSoon: "Kommt bald, derzeit noch nicht verfügbar.",
      about: "Über die App",
      version: "Version",
      developer: "Entwickler",
      iphoneGuide: "Auf dem iPhone: Link in Safari öffnen, Teilen antippen, Zum Home-Bildschirm auswählen und Hinzufügen antippen.",
      androidPromptUnavailable: "Android: Wenn das Installationsfenster nicht erscheint, öffne das Chrome-Menü und wähle App installieren.",
      androidInstalled: "Listora ist bereits installiert.",
      androidAccepted: "Installation gestartet.",
      androidDismissed: "Installation abgebrochen.",
      copied: "Link kopiert"
    },
    ar: {
      settings: "الإعدادات",
      installShare: "التثبيت والمشاركة",
      installAndroid: "Android: تثبيت التطبيق",
      installIphone: "iPhone: دليل التثبيت",
      shareApp: "مشاركة التطبيق",
      language: "لغة التطبيق",
      soundVibration: "الصوت والاهتزاز",
      sound: "الصوت",
      vibration: "الاهتزاز",
      theme: "المظهر",
      light: "فاتح",
      dark: "داكن",
      feedback: "ملاحظات",
      feedbackBody: "إذا وجدت خطأ أو واجهت مشكلة أو لديك اقتراح لتحسين التطبيق، تواصل معنا. سنحاول مساعدتك والإجابة عن أسئلتك.",
      contacts: "جهات الاتصال:",
      comingSoon: "قريبا، غير متاح حاليا.",
      about: "حول التطبيق",
      version: "الإصدار",
      developer: "المطور",
      iphoneGuide: "على iPhone: افتح الرابط في Safari، اضغط مشاركة، اختر إضافة إلى الشاشة الرئيسية، ثم اضغط إضافة.",
      androidPromptUnavailable: "Android: إذا لم تظهر نافذة التثبيت، افتح قائمة Chrome واختر تثبيت التطبيق.",
      androidInstalled: "تم تثبيت Listora بالفعل.",
      androidAccepted: "بدأ التثبيت.",
      androidDismissed: "تم إلغاء التثبيت.",
      copied: "تم نسخ الرابط"
    }
  };

  const names = { en: "🇬🇧 English", ru: "🇷🇺 Русский", ka: "🇬🇪 ქართული", da: "🇩🇰 Dansk", de: "🇩🇪 Deutsch", ar: "🇸🇦 العربية" };
  const t = () => text[state.language] || text.en;
  const savePrefs = () => localStorage.setItem(SETTINGS_KEY, JSON.stringify(prefs));
  const getAppVersion = () => document.querySelectorAll(".app-footer p")[1]?.textContent.trim() || "v1.4.28";

  const css = document.createElement("style");
  css.textContent = `
    body.theme-light{--bg:#ffffff;--card:#ffffff;--text:#0f172a;--muted:#475569;--border:#e2e8f0;background:#ffffff;color:#0f172a}body.theme-light .topbar,body.theme-light .app-footer{background:rgba(255,255,255,.96);color:#0f172a;border-color:#e2e8f0}body.theme-light .settings-btn{background:#f8fafc;color:#0f172a;border-color:#e2e8f0}body.theme-light .card,body.theme-light .list-section,body.theme-light .summary-card,body.theme-light .item-card,body.theme-light .history-card,body.theme-light .settings-sheet{background:#fff;color:#0f172a;border-color:#e2e8f0}body.theme-light input,body.theme-light select{background:#fff;color:#0f172a;border-color:#e2e8f0}body.theme-light .settings-head{background:#fff;color:#0f172a;border-color:#e2e8f0}body.theme-dark{--bg:#0f172a;--card:#1e293b;--text:#f8fafc;--muted:#cbd5e1;--border:#334155;background:radial-gradient(circle at top,#1e293b,#020617 62%);color:#f8fafc}body.theme-dark .card,body.theme-dark .list-section,body.theme-dark .summary-card,body.theme-dark .item-card,body.theme-dark .history-card,body.theme-dark .settings-sheet{background:#1e293b;color:#f8fafc;border-color:#334155}body.theme-dark input,body.theme-dark select{background:#0f172a;color:#f8fafc;border-color:#334155}body.theme-dark .settings-head{background:#1e293b;color:#f8fafc;border-color:#334155}body.theme-dark .item-details,body.theme-dark .history-meta,body.theme-dark .history-items,body.theme-dark .settings-label{color:#cbd5e1}.settings-block{padding:14px;border:1px solid var(--border);border-radius:20px;background:rgba(248,250,252,.06);display:grid;gap:10px}.settings-title-small{text-align:left;font-weight:950;color:var(--text);font-size:.95rem}.settings-action{width:100%;padding:13px 14px;border-radius:16px;border:1px solid var(--border);background:#f8fafc;color:#0f172a;font-weight:900;text-align:left}.theme-dark .settings-action{background:#0f172a;color:#f8fafc}.settings-row2{display:flex;align-items:center;justify-content:space-between;gap:12px}.switch-pill{width:58px;height:32px;border-radius:999px;background:#cbd5e1;position:relative;border:0}.switch-pill.on{background:#22c55e}.switch-pill::after{content:"";position:absolute;top:4px;left:4px;width:24px;height:24px;border-radius:50%;background:white;transition:.2s}.switch-pill.on::after{left:30px}.theme-slider{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center}.theme-track{height:38px;border-radius:999px;background:#e2e8f0;position:relative;border:1px solid var(--border)}.theme-dark .theme-track{background:#0f172a}.theme-knob{position:absolute;top:4px;width:28px;height:28px;border-radius:50%;background:#22c55e;transition:.2s;left:4px}.theme-track.dark .theme-knob{left:calc(100% - 32px)}.language-picker{position:relative}.language-current{width:100%;display:flex;justify-content:space-between;align-items:center;padding:14px;border:1px solid var(--border);border-radius:16px;background:#f8fafc;color:#0f172a;font-weight:900}.theme-dark .language-current{background:#0f172a;color:#f8fafc}.language-menu{display:none;margin-top:8px;border:1px solid var(--border);border-radius:16px;overflow:hidden;background:#fff}.theme-dark .language-menu{background:#0f172a}.language-menu.open{display:grid}.language-choice{padding:13px;border:0;background:transparent;color:inherit;text-align:left;font-weight:900}.settings-note{display:none;padding:14px;border-radius:16px;background:#dcfce7;color:#166534;font-weight:800}.about-center{text-align:center;display:grid;gap:8px;padding:10px 0}.install-visual{font-size:2rem;text-align:center;padding:18px;border-radius:18px;background:#f1f5f9}.theme-dark .install-visual{background:#0f172a}.app-footer{text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}.app-footer p{text-align:center;width:100%}
  `;
  document.head.appendChild(css);

  let audioContext=null,activeOscillator=null,beepTimer=null,lastBeepAt=0;
  function applyTheme(){document.body.classList.toggle("theme-light",prefs.theme==="light");document.body.classList.toggle("theme-dark",prefs.theme!=="light");}
  let deferredInstallPrompt=null;
  function note(msg){const n=document.getElementById("settingsNote"); if(!n)return; n.textContent=msg; n.style.display="block"; clearTimeout(window.__settingsNoteTimer); window.__settingsNoteTimer=setTimeout(()=>n.style.display="none",9000);}
  function isStandalone(){return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone===true;}
  window.addEventListener("beforeinstallprompt",(event)=>{event.preventDefault();deferredInstallPrompt=event;});
  window.addEventListener("appinstalled",()=>{deferredInstallPrompt=null;note(t().androidInstalled);});
  function stopBeep(){clearTimeout(beepTimer);beepTimer=null;if(activeOscillator){try{activeOscillator.stop()}catch(e){}try{activeOscillator.disconnect()}catch(e){}activeOscillator=null}if(audioContext){try{audioContext.close()}catch(e){}audioContext=null}}
  function beep(){if(!prefs.sound){stopBeep();return}const now=Date.now();if(now-lastBeepAt<120)return;lastBeepAt=now;stopBeep();try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const c=new C();const o=c.createOscillator();const g=c.createGain();audioContext=c;activeOscillator=o;o.type="sine";o.frequency.value=720;g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.03,c.currentTime+.01);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.055);o.connect(g);g.connect(c.destination);o.start();beepTimer=setTimeout(stopBeep,90)}catch(e){stopBeep()}}
  document.addEventListener("click",e=>{const button=e.target.closest("button");if(!button)return;if(prefs.vibration&&navigator.vibrate)navigator.vibrate(15);if(button.id!=="soundSwitch")beep()},true);

  async function shareApp(){if(navigator.share){try{await navigator.share({title:"Listora",text:"Listora",url:APP_URL})}catch(e){}}else if(navigator.clipboard){await navigator.clipboard.writeText(APP_URL);note(t().copied)}}
  async function installAndroid(){const x=t();if(isStandalone()){note(x.androidInstalled);return}if(!deferredInstallPrompt){note(x.androidPromptUnavailable);return}try{const promptEvent=deferredInstallPrompt;deferredInstallPrompt=null;await promptEvent.prompt();const result=await promptEvent.userChoice;note(result.outcome==="accepted"?x.androidAccepted:x.androidDismissed)}catch(e){note(x.androidPromptUnavailable)}}
  function showIphoneGuide(){note(t().iphoneGuide)}

  function renderSettings(){
    const sheet=settingsPanel?.querySelector(".settings-sheet"); if(!sheet)return; const x=t();
    sheet.innerHTML=`<div class="settings-head"><h2>${x.settings}</h2><button id="closeSettingsBtn" class="close-btn" type="button">×</button></div><div class="settings-block"><div class="settings-title-small">📲 ${x.installShare}</div><button id="androidInstallBtn" class="settings-action" type="button">🤖 ${x.installAndroid}</button><button id="iphoneGuideBtn" class="settings-action" type="button">📱 ${x.installIphone}</button><button id="shareAppBtn" class="settings-action" type="button">📤 ${x.shareApp}</button><div id="settingsNote" class="settings-note"></div></div><div class="settings-block"><div class="settings-title-small">🌍 ${x.language}</div><div class="language-picker"><button id="languageCurrent" class="language-current" type="button"><span>${names[state.language]}</span><span>⌄</span></button><div id="languageMenu" class="language-menu">${Object.entries(names).map(([k,v])=>`<button class="language-choice" data-lang="${k}" type="button">${v}</button>`).join("")}</div></div></div><div class="settings-block"><div class="settings-title-small">🔊 ${x.soundVibration}</div><div class="settings-row2"><strong>${x.sound}</strong><button id="soundSwitch" class="switch-pill ${prefs.sound?"on":""}" type="button"></button></div><div class="settings-row2"><strong>${x.vibration}</strong><button id="vibrationSwitch" class="switch-pill ${prefs.vibration?"on":""}" type="button"></button></div></div><div class="settings-block"><div class="settings-title-small">🎨 ${x.theme}</div><button id="themeSwitch" class="settings-action" type="button"><div class="theme-slider"><span>☀️ ${x.light}</span><div class="theme-track ${prefs.theme==="dark"?"dark":""}"><span class="theme-knob"></span></div><span>${x.dark} 🌙</span></div></button></div><div class="settings-block"><div class="settings-title-small">✉️ ${x.feedback}</div><p style="margin:0;color:var(--muted);line-height:1.45">${x.feedbackBody}</p><p style="margin:0"><strong>${x.contacts}</strong> ${x.comingSoon}</p></div><div class="settings-block"><div class="settings-title-small">ℹ️ ${x.about}</div><div class="about-center"><strong>Listora</strong><span>${x.version}: ${getAppVersion()}</span><span>${x.developer}: Adam Margoev 2026</span></div></div>`;
    const about=sheet.querySelector(".about-center");if(about)about.innerHTML=`<strong>Listora</strong><span>${x.version}: ${getAppVersion()}</span><span>${x.developer}: Adam Margoev 2026</span>`;
    document.getElementById("closeSettingsBtn").onclick=closeSettings;
    document.getElementById("androidInstallBtn").onclick=installAndroid;
    document.getElementById("iphoneGuideBtn").onclick=showIphoneGuide;
    document.getElementById("shareAppBtn").onclick=shareApp;
    document.getElementById("languageCurrent").onclick=()=>document.getElementById("languageMenu").classList.toggle("open");
    document.querySelectorAll(".language-choice").forEach(b=>b.onclick=()=>{state.language=b.dataset.lang;saveState();render();renderSettings();});
    document.getElementById("soundSwitch").onclick=()=>{prefs.sound=!prefs.sound;savePrefs();if(!prefs.sound)stopBeep();renderSettings()};
    document.getElementById("vibrationSwitch").onclick=()=>{prefs.vibration=!prefs.vibration;savePrefs();if(prefs.vibration&&navigator.vibrate)navigator.vibrate(30);renderSettings()};
    document.getElementById("themeSwitch").onclick=()=>{prefs.theme=prefs.theme==="dark"?"light":"dark";savePrefs();applyTheme();renderSettings()};
  }

  const originalOpenSettings=openSettings;
  openSettings=function(){originalOpenSettings();renderSettings();};
  if(settingsBtn){settingsBtn.onclick=openSettings;}
  applyTheme();
})();
