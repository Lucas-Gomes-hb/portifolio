import LogoSVG from "../Logo";
import "./styles.css"

function Navbar() {
    return (
        <nav>
            <LogoSVG size={"60px"} stroke={"5px"} color={"#333"}></LogoSVG>
            <div className="nav-content">

                <button>
                    Habilidades
                </button>
            </div>
        </nav>
    )
}

export default Navbar;