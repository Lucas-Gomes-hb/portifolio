import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      greeting: "Hello",
      changeLanguage: "Change Language",
      welcomeMessage: "Welcome to our website!",
    },
  },
  pt: {
    translation: {
      greeting: "Olá",
      changeLanguage: "Trocar Idioma",
      welcomeMessage: "Bem-vindo ao nosso site!",
    },
  },
  es: {
    translation: {
      greeting: "Hola",
      changeLanguage: "Cambiar idioma",
      welcomeMessage: "¡Bienvenido a nuestro sitio web!",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta idioma do navegador automaticamente
  .use(initReactI18next) // Inicializa o i18next com React
  .init({
    resources,
    fallbackLng: "en", // Idioma padrão
    interpolation: {
      escapeValue: false, // React já trata segurança contra XSS
    },
  });

export default i18n;
