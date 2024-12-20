import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Flag from 'react-world-flags';  // Importando o componente de bandeira
import "./styles.css";

function Footer() {
    const { t, i18n } = useTranslation();
    const [showLanguages, setShowLanguages] = useState(false);
    const [darkMode, setDarkMode] = useState(true); // Estado para controlar o modo escuro
    const [snackbarVisible, setSnackbarVisible] = useState(false); // Estado do Snackbar

    const languages = [
        { code: "pt", name: "Português", flag: "BR" },
        { code: "en", name: "English", flag: "US" },
        { code: "es", name: "Español", flag: "ES" },
    ];

    const handleLanguageChange = (code) => {
        i18n.changeLanguage(code); // Troca o idioma
        setShowLanguages(false); // Fecha o dropdown após a escolha
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Alterna o modo escuro
        document.body.classList.toggle('dark-mode', darkMode); // Adiciona a classe dark-mode ao body
    };

    const handleEmailCopy = () => {
        console.log(window.outerWidth)
        navigator.clipboard.writeText("lucas.gomes.pessoal@gmail.com") // Copia o e-mail
            .then(() => {
                setSnackbarVisible(true); // Exibe o Snackbar
                setTimeout(() => setSnackbarVisible(false), 3000); // Oculta após 3 segundos
            })
            .catch((err) => alert("Erro ao copiar o e-mail: " + err));
    };

    const filteredLanguages = languages.filter(lang => lang.code !== i18n.language);

    return (
        <div className="footer-container">
            <section className="social-midia">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault(); // Evita o comportamento padrão do link
                        handleEmailCopy(); // Chama a função para copiar e exibir o Snackbar
                    }}
                    rel="noopener noreferrer"
                >
                    <i className="bi bi-google"></i>
                </a>
                <a href="https://www.linkedin.com/in/lucas-gomes-3a7564189/" target="_blank" rel="noopener noreferrer">
                    <i className={`bi bi-linkedin`}></i>
                </a>
                <a href="https://www.instagram.com/lucasfigueiredo.gomes/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://wa.me/5551992568194" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                </a>
            </section>

            <section className="site-controls">
                <div
                    className="language-selector"
                    onClick={() => setShowLanguages(!showLanguages)}
                    style={{ position: "relative" }}
                >
                    <Flag
                        code={
                            i18n.language === "pt"
                                ? "BR"
                                : i18n.language === "en"
                                    ? "US"
                                    : "ES"
                        }
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />

                    {showLanguages && (
                        <div className="language-options">
                            {filteredLanguages.map((lang) => (
                                <span
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Flag
                                        code={lang.flag}
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="theme-toggler" onClick={toggleDarkMode} style={{ marginTop: '20px', cursor: 'pointer' }}>
                    <i className={`bi ${darkMode ? 'bi-moon' : 'bi-sun'}`} style={{ fontSize: '24px' }}></i>
                </div>
            </section>

            {/* Snackbar */}
            {snackbarVisible && (
                <div className="snackbar">
                    E-mail copiado para a área de transferência!
                </div>
            )}
        </div>
    );
}

export default Footer;
