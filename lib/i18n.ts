import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import commonIt from "../public/locales/it/common.json"
import commonEn from "../public/locales/en/common.json"

import rulesIt from "../public/locales/it/rules.json"
import rulesEn from "../public/locales/en/rules.json"

import servicesIt from "../public/locales/it/services.json"
import servicesEn from "../public/locales/en/services.json"

i18n.use(initReactI18next).init({
  resources: {
    it: {
      common: commonIt,
      rules: rulesIt,
      services: servicesIt,
    },
    en: {
      common: commonEn,
      rules: rulesEn,
      services: servicesEn,
    },
  },
  lng: "it",
  fallbackLng: "it",
  interpolation: { escapeValue: false },
})

export default i18n
