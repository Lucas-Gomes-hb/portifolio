import LogoSVG from "../Logo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importando o hook de tradução
import "./styles.css"

function Navbar() {
    const { t } = useTranslation(); // Hook para acessar a tradução

    return (
        <nav>
            <Link to={"/"}>
                <LogoSVG size={"60px"} stroke={"5px"} color={"#333"}></LogoSVG>
            </Link>
            <div className="nav-content">
                <Link to={"/skills"}>
                <button>
                        {t('navbar.skills')} {/* Texto traduzido */}
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;