import React from "react";
import PropTypes from "prop-types";
import "./styles.css"; // Estilo específico para o card

function SkillCard({ icon, title, description }) {
    return (
        <div className="skill-card">
            {icon}
            <section>
                <h3 className="skill-title">{title}</h3>
                <p className="skill-description">{description}</p>
            </section>
        </div>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SkillCard;
