import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importando as traduções
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
    resources: {
        pt: { translation: pt },
        en: { translation: en },
        es: { translation: es },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'en', // Caso uma chave não exista
    interpolation: {
        escapeValue: false, // Não escapar valores
    },
});

export default i18n;
