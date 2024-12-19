import imagenLogo from "../../../../assets/cuvee.png";
import './EstiloLogo.css';

function Logo() {
    return (
        <div id="headerLogo">
            <img src= {imagenLogo} alt="Prueba de Logo provsoria" id="hdLgImg" />
        </div>
    );
}

export default Logo;
