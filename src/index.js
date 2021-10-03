import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next} from "react-i18next";
import HttpApi from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['fr','en','jp'],
    fallbackLng: "en",
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json'
    },
    detection:{
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches:['cookie']
    },
    react: {useSuspense: false},
    load: 'languageOnly'
  });




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
