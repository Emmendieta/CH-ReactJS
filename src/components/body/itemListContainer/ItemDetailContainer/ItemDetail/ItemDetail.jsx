import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductos } from "../../../../../baseDatos/fetchProductos.js";
import './EstiloItemDetail.css';
import Error from "../../../error/Error";
import ItemCount from "./ItemCount.jsx";
import SweetAlert2Wait from "../../../sweetAlert2/SweetAlert2Wait.jsx";

function ItemDetail() {
    const { categoria, id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProductos()
            .then((productos) => {
                const prod = productos.find((productoBD) => productoBD.id === parseInt(id));
                if (!prod) { setError("El producto indicado no existe en la Base de Datos!");
                } else if (prod.categoria !== categoria) {  setError("La categoría no coincide con el producto seleccionado!");
                } else {
                    setProducto(prod);
                    setError(null);
                }
            }).catch(() => setError("Hubo un problema al cargar los datos."));
    }, [categoria, id]);

    const handleAddToCart = (cantidad) => {
        //Modificar este codigo para cuando este habilitada la funcion de agregar al carrito:
        console.log(`Prueba: Agregaste ${cantidad} unidades del producto ${producto.nombre} al carrito.`);
    };

    if (error) return <Error mensaje={error} />;
    if (!producto) return (<SweetAlert2Wait />);

    return (
        <div className="divItemDetail">
            <h1 className="h1ItemDetail">Detalle del Producto</h1>
            <img src={producto.imagen} alt="imagen producto" className="imgItemDetail" />
            <h2 className="h2ItemDetail">{producto.nombre}</h2>
            <p className="pItemDetail">Precio: ${producto.precio}</p>
            <p className="pItemDetail">Categoría: {categoria}</p>
            <p className="pItemDetail">Cantidad disponible: {producto.cantidad}</p>
            <p className="pItemDetail">Descripción: {producto.descripcion}</p>
            <ItemCount stock={producto.cantidad} initial={1} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemDetail;