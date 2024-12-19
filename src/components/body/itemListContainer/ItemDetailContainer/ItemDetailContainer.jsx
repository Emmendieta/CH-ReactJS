import { Link, useLocation } from 'react-router-dom';
import './EstiloItemDetailContainer.css';

function ItemDetailContainer({ id, nombre, precio, cantidad, imagen, categoria }) {

    //Verifico que url tiene:
    const direccionUrl = useLocation();
    //En caso de que este filtrada me asegure que no ponga "categoria" de vuelta:
    const urlBase = direccionUrl.pathname.startsWith('/categoria') // Si está filtrada, usar la ruta correcta para la categoría
    ? `/productos/${categoria}` : `/productos/${categoria}`; // Si no está filtrada, usar la misma ruta (para consistencia)

    return (
        <div className="card tarjetaProducto" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top imgItemDetailContainer" alt="imagen producto" />
            <div className="card-body">
                <h1 className="card-title h1ItemDetailContainer">{nombre}</h1>
                <div className='precioItemDetailContainer'>
                <h6 className="card-text h6ItemDetailContainer">Precio: $</h6>
                <p className='pItemDetailContainer'>{precio}</p>
                </div>
                <div className='cantidadItemDetailContainer'>
                <h6 className="card-text h6ItemDetailContainer">Cantidad: </h6>
                <p className='pItemDetailContainer'>{cantidad}</p>
                </div>
                <div className='categoriaItemDetailContainer'>
                <h6 className="card-text h6ItemDetailContainer">Categoria: </h6>
                <p className='pItemDetailContainer'>{categoria}</p>
                </div>
                <div className='btnsItemDetailContainer'>
                <Link href="#" className="btn btn-secondary btnDetallesDetailContainer" to={`${urlBase}/${id}`}>Ver detalles</Link>
                <button href="#" className="btn btn-primary btnAgregarCarritosDetailContainer">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;