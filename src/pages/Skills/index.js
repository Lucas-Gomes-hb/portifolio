import React from "react";
import Navbar from "../../components/AppBar";
import Sidebar from "../../components/SideBar";
import SkillCard from "../../components/SkillCard"; // Importa o componente do card
import "./styles.css"; // Estilo para o layout da página

function Skills() {
    const skills = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            title: "Flutter",
            description: "Framework para desenvolvimento de aplicativos multiplataforma robustos e modernos.",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            title: "React",
            description: "Biblioteca JavaScript para construir interfaces de usuário interativas e escaláveis.",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            title: "Python",
            description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
            title: "AWS",
            description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        //     title: "Python",
        //     description: "Linguagem poderosa para automação, APIs e desenvolvimento de inteligência artificial.",
        // },
        // {
        //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
        //     title: "AWS",
        //     description: "Plataforma de computação em nuvem para soluções escaláveis e de alta performance.",
        // },
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
