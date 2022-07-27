import en from './locales/en.json'
import ru from './locales/ru.json'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ru
    },
    lng: "en"
  });