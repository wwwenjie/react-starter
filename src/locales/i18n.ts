import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/translation.json'
import zhCN from './zh-CN/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zhCN: {
      translation: zhCN,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
