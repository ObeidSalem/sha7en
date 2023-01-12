




import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const Languages = ['en', 'ar'];

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false
    },
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      allowMultiLoading: true
    },

    // Options for language detector
    detection: {
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false 
    }
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

