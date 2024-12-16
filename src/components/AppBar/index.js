import LogoSVG from "../Logo";
import "./styles.css"

function Navbar() {
    return (
        <nav>
            <LogoSVG size={"60px"} stroke={"5px"} color={"#333"}></LogoSVG>
            <div className="nav-content">
                <span className="name">
                    Lucas Gomes
                </span>

                <button>
                    Curriculo
                </button>
                <button>
                    Habilidades
                </button>
            </div>
        </nav>
    )
}

export default Navbar;