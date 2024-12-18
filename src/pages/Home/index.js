import React, { useState, useEffect } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import { ReactComponent as Happy } from "../../assets/happy.svg";
import { ReactComponent as Normal } from "../../assets/normal.svg";
import { ReactComponent as Wink } from "../../assets/wink.svg";

function Home() {
  const { t, i18n } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0); // Index dos parágrafos
  const [fadeState, setFadeState] = useState("fade-in"); // Estado do fade
  const [currentIcon, setCurrentIcon] = useState(0); // Estado para alternar ícones
  const icons = [Normal, Happy, Wink]; // Array dos ícones SVG

  const getParagraphs = () => t("paragraphs", { returnObjects: true });

  const [paragraphs, setParagraphs] = useState(getParagraphs());

  // Atualiza os parágrafos sempre que o idioma for alterado
  useEffect(() => {
    setParagraphs(getParagraphs());
  }, [i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval); // Limpar intervalo
  }, []);

  const CurrentIcon = icons[currentIcon]; // Ícone atual

  // const paragraphs = [
  //   "Desenvolvo aplicativos mobile personalizados com Flutter, atendendo desde soluções de gestão para restaurantes e empresas até apps com inteligência artificial, como assistentes médicos e copilots.",
  //   "Crio landing pages modernas, sistemas corporativos funcionais e automações inteligentes, incluindo integração de APIs e ERPs, garantindo eficiência e conectividade entre serviços.",
  //   "Automatizo processos empresariais com tecnologias como chatbots via WhatsApp, agendamentos pelo Google Agenda e controle de mapas usando o Google Maps, facilitando a operação e otimizando recursos.",
  //   "Ofereço soluções completas e escaláveis com Python, PHP, JavaScript, React, e mais, aplicando também inteligência artificial para análise de dados, reconhecimento de imagem e automações avançadas."
  // ];

  useEffect(() => {
    let fadeOutTimeout;
    let nextParagraphTimeout;

    const cycleParagraphs = () => {
      setFadeState("fade-in"); // Inicia o fade-in

      fadeOutTimeout = setTimeout(() => {
        setFadeState("fade-out"); // Inicia o fade-out

        nextParagraphTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % paragraphs.length); // Incrementa o índice
          cycleParagraphs(); // Reinicia o ciclo
        }, 2000); // Tempo do fade-out (2 segundos)
      }, 5000); // Tempo de exibição do parágrafo (5 segundos)
    };

    cycleParagraphs(); // Inicia o ciclo

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextParagraphTimeout);
    };
  }, [paragraphs.length]);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div className="content">
          <section className="texts">
            <div className="speech-bubble">
              <p>
                {t("introduction.greeting")} <br />
                {t("introduction.name_intro")}
              </p>
            </div>

            <h1 className="animated-name">{t("introduction.name")}</h1>

            <div className={`fade-paragraph ${fadeState}`}>
              <p className="dynamic-paragraph">{paragraphs[currentIndex]}</p>
            </div>
          </section>


          <section>
            <div className="svgs">
              <CurrentIcon className="animated-svg svg" />
            </div>
          </section>
        </div>

      </div>
    </>
  );
}

export default Home;
