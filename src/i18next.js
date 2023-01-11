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
    debug: true,
    lng: 'en',
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: false,
          // Options for language detector
          detection: {
            order: ['path', 'localStorage', 'cookie', 'htmlTag'],
            caches: ['cookie', 'localStorage'],
          },
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: 'locales/add/{{lng}}/{{ns}}',
      allowMultiLoading: false, 
  // parse data after it has been fetched
  // in example use https://www.npmjs.com/package/json5
  // here it removes the letter a from the json (bad idea)
  parse: function(data) { return data.replace(/a/g, ''); },

  //parse data before it has been sent by addPath
  parsePayload: function(namespace, key, fallbackValue) { return { key } },

  // allow cross domain requests
  crossDomain: false,

  // allow credentials on cross domain requests
  withCredentials: false,

  // overrideMimeType sets request.overrideMimeType("application/json")
  overrideMimeType: false,

  // custom request headers sets request.setRequestHeader(key, value)
  customHeaders: {
    authorization: 'foo',
    // ...
  },
    
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

