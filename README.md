# shoping-list-app
Multilingual shopping list with automatic currency selection, quantity tracking, and expense calculator.

## File structure

- `index.html` - app markup and script loading order.
- `style.css` - all visual styling, themes, contrast fixes, and scrollbars.
- `app-core.js` - main shopping-list state, storage, translations, totals, history, sharing, and printing.
- `shopping-list-rendering.js` - item/history rendering upgrades, inline price editing, receipt delete confirmation, and history panel open/close binding.
- `settings-panel.js` - settings panel UI, language/theme/sound/vibration controls, and click sound handling.
- `currency-settings.js` - currency selection and money formatting.
- `app-behavior.js` - viewport, scroll, overscroll, and zoom/pinch prevention rules.
- `settings-extras.js` - Listora branding in settings, share-app text, and synced About version.
- `purchase-help.js` - help popover for the purchase completion section.
- `manifest.webmanifest` - PWA install metadata.
