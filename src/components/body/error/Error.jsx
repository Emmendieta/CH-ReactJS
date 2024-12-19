import oopsImagen from "../../../assets/oops.png";
import './EstiloError.css';

function Error({mensaje}) {
    return (
        <div className="divError">
            <h1>{mensaje}</h1>
            <img src={oopsImagen} alt="imagenError" className="imgError"/>
        </div>
    )
}

export default Error;