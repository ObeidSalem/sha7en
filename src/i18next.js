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
    fallbackLng: 'false',
    nsSeparator: false,
    keySeparator: false,
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    // Options for language detector
    detection: {
      order: ['path', 'localStorage', 'cookie', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    // react: { useSuspense: false },
    whitelist: Languages,
    useSuspense: false,
    interpolation: {
        escapeValue: false,
    }


  })

