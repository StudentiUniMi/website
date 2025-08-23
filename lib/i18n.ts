import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import commonIt from "../public/locales/it/common.json"
import commonEn from "../public/locales/en/common.json"

import rulesIt from "../public/locales/it/rules.json"
import rulesEn from "../public/locales/en/rules.json"

import servicesIt from "../public/locales/it/services.json"
import servicesEn from "../public/locales/en/services.json"

import searchIt from "../public/locales/it/search.json"
import searchEn from "../public/locales/en/search.json"

import degreeIt from "../public/locales/it/degree.json"
import degreeEn from "../public/locales/en/degree.json"

import aboutIt from "../public/locales/it/about.json"
import aboutEn from "../public/locales/en/about.json"

import notFoundIt from "../public/locales/it/notFound.json"
import notFoundEn from "../public/locales/en/notFound.json"

i18n.use(initReactI18next).init({
  resources: {
    it: {
      common: commonIt,
      rules: rulesIt,
      services: servicesIt,
      search: searchIt,
      degree: degreeIt,
      about: aboutIt,
      notFound: notFoundIt,
    },
    en: {
      common: commonEn,
      rules: rulesEn,
      services: servicesEn,
      search: searchEn,
      degree: degreeEn,
      about: aboutEn,
      notFound: notFoundEn,
    },
  },
  lng: "it",
  fallbackLng: "it",
  ns: ["common", "rules", "services", "search", "degree", "about", "notFound"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
})

export default i18n
