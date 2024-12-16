import React from "react";
import "./styles.css";
import Navbar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <Sidebar></Sidebar>
        <div className="content">
          <header className="header">
                <h1 className="title">Bem-vindo ao Meu Portfólio</h1>
                <p className="subtitle">
                    Focado em <span className="highlight">Backend</span> e 
                    desenvolvimento de <span className="highlight">aplicativos</span>.
                </p>
            </header>
          <div className="card">
            <h2>Flutter</h2>
            <p>Construção de aplicativos móveis modernos.</p>
          </div>
          <div className="card">
            <h2>Python</h2>
            <p>APIs robustas e soluções com IA.</p>
          </div>
          <div className="card">
            <h2>PHP</h2>
            <p>Desenvolvimento web com alta performance.</p>
          </div>
          <div className="card">
            <h2>Web</h2>
            <p>Experiência em React e tecnologias modernas.</p>
          </div>
        </div>

        {/* Rodapé */}
        
      </div>
    </>
  );
}

export default Home;
