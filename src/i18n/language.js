import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json'
import ru from './locales/ru.json'


const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
}

export default i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en"
  });