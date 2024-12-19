import React from "react";
import Navbar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import SkillCard from "../../components/SkillCard";
import "./styles.css";
import { SiFlutter, SiReact, SiPython, SiPhp, SiMysql, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

function Skills() {
    const skills = [
        {
            icon: <SiFlutter className="skill-icon" />, // Ícone direto do pacote
            title: "Flutter",
            description: "Já desenvolvi diversos aplicativos com Flutter, incluindo apps para gestão de pedidos (delivery e indoor), integração com inteligência artificial para chatbots, controle de estoque, entre outros. Flutter é minha principal habilidade, e qualquer solução que você precisar, podemos criar com este framework.",
        },
        {
            icon: <SiPython className="skill-icon" />, // Ícone para Python
            title: "Python",
            description: "Desenvolvi inúmeras APIs usando Flask e FastAPI, implementei serviços integrados ao Azure Functions, e trabalhei com inteligência artificial e estruturação de dados dispersos. Python é uma das ferramentas mais úteis do meu conhecimento, amplamente utilizada para automação de serviços diversos.",
        },
        {
            icon: <VscAzure className="skill-icon" />, // Ícone para Azure
            title: "Azure",
            description: "Azure é uma das minhas principais ferramentas. Já desenvolvi diversos serviços com Azure Functions, utilizei Cosmos DB, Azure Applications e foquei na escalabilidade. Também gerenciei repositórios e processos usando o Azure DevOps.",
        },
        {
            icon: <SiMysql className="skill-icon" />, // Ícone para MySQL
            title: "MySQL",
            description: "Foi o primeiro banco de dados SQL que aprendi. Já desenvolvi e expandi muitos sistemas que utilizavam MySQL, incluindo trabalhos com GeoSQL em várias aplicações.",
        },
        {
            icon: <SiPhp className="skill-icon" />, // Ícone para PHP
            title: "PHP",
            description: "Foi a primeira linguagem de programação que aprendi. Com PHP, criei APIs para consumo geral em aplicações legadas e integrei diversos apps e sites. É uma das minhas habilidades mais sólidas, com amplo conhecimento semântico.",
        },
        {
            icon: <SiReact className="skill-icon" />, // Ícone para React
            title: "React",
            description: "Tenho experiência com React, desenvolvendo landing pages, sistemas de gestão (CRM), integrações via API com ERPs e utilizando React como principal consumidor dessas APIs.",
        },
        {
            icon: <SiPostgresql className="skill-icon" />, // Ícone para PostgreSQL
            title: "PostgreSQL",
            description: "PostgreSQL é uma linguagem SQL robusta. Com o suporte dos sistemas Azure, implementei várias soluções escaláveis e eficientes utilizando este banco de dados.",
        },
        {
            icon: <FaAws className="skill-icon" />, // Ícone para AWS
            title: "AWS",
            description: "Tenho experiência na criação e manutenção de máquinas virtuais na AWS, bem como no gerenciamento e escalabilidade de bancos de dados e serviços na plataforma.",
        },        

    ];

    return (
        <>
            <Navbar />
            <div className="skill-container">
                <Sidebar />
                <section className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                        />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Skills;
