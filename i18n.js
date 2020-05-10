const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en'
  },
  all: {
    ht: 'ht',
    fr: 'fr',
    en: 'en'
  }
}

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ht',
  otherLanguages: ['en', 'fr'],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});

export const {
  appWithTranslation,
  withTranslation
} = NextI18NextInstance;
