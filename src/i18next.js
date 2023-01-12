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
    debug: true,
    lng: 'en',
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: 'en',
    // Options for language detector
    detection: {
      order: ['path', 'localStorage', 'cookie', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },

    allowMultiLoading: false,
    loadPath: `/locales/{{lng}}/{{ns}}.json`,
    /*
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
    
          // react: { useSuspense: false },
          whitelist: Languages,
          useSuspense: false,
          interpolation: {
              escapeValue: false,
          }*/

  })

