import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

const Languages = ['en', 'ar'];

i18next
  .use(Backend)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    lng: "en",
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'localStorage', 'cookie', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    // react: { useSuspense: false },
    debug: true,
    whitelist: Languages,

    interpolation: {
        escapeValue: false,
    }


  })

