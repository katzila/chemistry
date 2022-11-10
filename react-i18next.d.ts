import 'react-i18next';

import en from './src/i18n/locales/en.json'


declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
    }
  }
}
