import { productos } from "../../../../../baseDatos/productos";
import { useParams } from "react-router-dom";
import './EstiloItemDetail.css';
import Error from "../../../error/Error";

function ItemDetail() {
    const {categoria, id} = useParams();
    const producto = productos.find(productoBD => productoBD.id === parseInt(id));

    //En caso de no encontrar el id de algun producto:
    if (!producto) {
        return <Error mensaje = "El producto indicado no existe en la Base de Datos!"/>
    }
    if (producto.categoria !== categoria) {
        return <Error mensaje = "La categoría no coincide con el producto seleccionado!"/>
    }
    return(
        <>
            <div className="divItemDetail">
                <h1 className="h1ItemDetail">Detalle del Producto</h1>
                <img src={producto.imagen} alt="imagen producto" className="imgItemDetail"/>
                <h2 className="h2ItemDetail">{producto.nombre}</h2>
                <p className="pItemDetail">Precio: ${producto.precio}</p>
                <p className="pItemDetail">Categoría: {categoria}</p>
                <p className="pItemDetail">Cantidad: {producto.cantidad}</p>
                <p className="pItemDetail">Descripción: {producto.descripcion}</p>
                <button className="btn btn-primary btnAgregarCarritoItemDetail">Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemDetail;