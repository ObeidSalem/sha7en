import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ar'];


i18next
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({

    fallbackLng: 'en',
    debug: true,
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    },



    // Options for language detector
    detection: {
      caches: ['cookie', 'localStorage'],
    },


  })

