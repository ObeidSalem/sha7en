import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';



i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'translation',
    ns: ['translation'],

    backend: {
      loadPath: `${window.location.pathname}locales/{{lng}}/{{ns}}.json`
    },
    load: 'unspecific',



    // Options for language detector
    detection: {
      caches: ['cookie', 'localStorage'],
    },
  })

export default i18next;

