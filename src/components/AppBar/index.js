import LogoSVG from "../Logo";
import { Link } from "react-router-dom";
import "./styles.css"

function Navbar() {
    return (
        <nav>
            <Link to={"/"}>
                <LogoSVG size={"60px"} stroke={"5px"} color={"#333"}></LogoSVG>
            </Link>
            <div className="nav-content">
                <Link to={"/skills"}>
                    <button>
                        Habilidades
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;