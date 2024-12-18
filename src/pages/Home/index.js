import React, { useState, useEffect } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import { ReactComponent as Happy } from "../../assets/happy.svg";
import { ReactComponent as Normal } from "../../assets/normal.svg";
import { ReactComponent as Wink } from "../../assets/wink.svg";

function Home() {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0); // Index dos parágrafos
  const [fadeState, setFadeState] = useState("fade-in"); // Estado do fade
  const [currentIcon, setCurrentIcon] = useState(0); // Estado para alternar ícones
  const icons = [Normal, Happy, Wink]; // Array dos ícones SVG

  // Alternar entre os ícones a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval); // Limpar intervalo
  }, []);

  const CurrentIcon = icons[currentIcon]; // Ícone atual

  // Lista de parágrafos dinâmicos
  const paragraphs = [
    "Eu desenvolvo apps mobile para Android e Apple.",
    "Eu construo sites modernos e responsivos.",
    "Faço integrações entre sistemas e serviços.",
    "Desenvolvo AIs para automação inteligente.",
    "Faço automações para facilitar processos.",
    "Crio sistemas robustos e escaláveis.",
    "Faço engenharia de prompt para IA."
  ];

  const getRandomDelay = () => Math.random() * 5 * 1000; // Delay entre 0 e 5 segundos

  useEffect(() => {
    let fadeOutTimeout;
    let nextParagraphTimeout;

    const cycleParagraphs = () => {
      setFadeState("fade-in"); // Inicia o fade-in

      // Após 10 segundos + tempo aleatório, começa o fade-out
      fadeOutTimeout = setTimeout(() => {
        setFadeState("fade-out"); // Inicia o fade-out

        // Espera o tempo do fade-out e muda para o próximo grupo de parágrafos
        nextParagraphTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 3) % paragraphs.length);
          cycleParagraphs(); // Reinicia o ciclo
        }, 2000); // Tempo do fade-out (2 segundos)
      }, 3000 + getRandomDelay()); // 10 segundos + tempo aleatório
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
          {/* Balão de fala */}
          <section className="texts">
            <div className="speech-bubble">
              <p>Olá, <br />Me chamo</p>
            </div>

            {/* Nome com animação de fontes */}
            <h1 className="animated-name">Lucas Gomes</h1>

            {/* Parágrafos dinâmicos exibidos de 3 em 3 */}
            <div className={`fade-paragraph ${fadeState}`}>
              {paragraphs
                .slice(currentIndex, currentIndex + 3)
                .map((text, index) => (
                  <p
                    key={index}
                    className={`dynamic-paragraph ${index === 1 ? "middle-paragraph" : ""
                      }`}
                  >
                    {text}
                  </p>
                ))}
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
