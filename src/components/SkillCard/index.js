import React from "react";
import PropTypes from "prop-types";
import "./styles.css"; // Estilo específico para o card
import { useTranslation } from "react-i18next";

function SkillCard({ icon, skillKey }) {
    const { t } = useTranslation();
    const title = t(`skills.${skillKey}.title`);
    const description = t(`skills.${skillKey}.description`);

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
};

export default SkillCard;
