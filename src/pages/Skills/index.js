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
        { skillKey: "flutter", icon: <SiFlutter className="skill-icon" /> },
        { skillKey: "python", icon: <SiPython className="skill-icon" /> },
        { skillKey: "azure", icon: <VscAzure className="skill-icon" /> },
        { skillKey: "mysql", icon: <SiMysql className="skill-icon" /> },
        { skillKey: "php", icon: <SiPhp className="skill-icon" /> },
        { skillKey: "react", icon: <SiReact className="skill-icon" /> },
        { skillKey: "postgresql", icon: <SiPostgresql className="skill-icon" /> },
        { skillKey: "aws", icon: <FaAws className="skill-icon" /> }
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
                            skillKey={skill.skillKey}
                        />
                    ))}
                </section>
            </div>
        </>
    );
}

export default Skills;
