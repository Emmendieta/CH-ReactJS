import { Link } from "react-router-dom";
import "./EstiloLinks.css";

function Links() {
    return (
        <div id="headerLinks">
            <ul id="hdLksUl">
                <li>
                    <Link className="headerLink" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="headerLink" to="categoria/vinos">Vinos</Link>
                </li>
                <li>
                    <Link className="headerLink" to="categoria/bebidas">Bebidas</Link>
                </li>
                <li>
                    <Link className="headerLink" to="categoria/cervezas">Cervezas</Link>
                </li>
            </ul>
        </div>
    );
}

export default Links;
