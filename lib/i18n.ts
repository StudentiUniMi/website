import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import it from "../public/locales/it/common.json"
import en from "../public/locales/en/common.json"

i18n.use(initReactI18next).init({
  resources: {
    it: { common: it },
    en: { common: en },
  },
  lng: "it",
  fallbackLng: "it",
  interpolation: { escapeValue: false },
})

export default i18n
