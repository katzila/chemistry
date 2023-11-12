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

const navigatorLanguage = navigator.language?.split('-')[0]
const localStorageLanguage = localStorage.getItem('locale')

const initialLanguage: 'en' | 'ru' = localStorageLanguage === 'ru' || localStorageLanguage === 'en' ?
  localStorageLanguage
  : navigatorLanguage === 'ru' ?
    'ru'
    : 'en'

export default i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    returnObjects: true,
  });