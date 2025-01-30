import { useCart } from "../../../../../assets/Context/cartContext.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../baseDatos/configFirebase.jsx";
import './EstiloItemDetail.css';
import Error from "../../../error/Error";
import ItemCount from "./ItemCount.jsx";
import SweetAlert2Wait from "../../../sweetAlert2/SweetAlert2Wait.jsx";

function ItemDetail() {
    const { categoria, id } = useParams();
    const { addToCart } = useCart(); // Accedo a la función addToCart
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productoData = docSnap.data();
                    if (productoData.categoria !== categoria) {
                        setError("La categoría no coincide con el producto seleccionado!");
                    } else {
                        setProducto({
                            id: docSnap.id,
                            ...productoData
                        });
                        setError(null);
                    }
                } else {
                    setError("El producto indicado no existe en la Base de Datos!");
                }
            } catch (error) {
                setError("Hubo un problema al cargar los datos.");
            }
        };

        fetchProducto();
    }, [categoria, id]);

    const handleAddToCart = (cantidad) => {
        //Uso la función addToCart del contexto para agregar el producto al carrito:
        addToCart(producto.id, cantidad, producto.precio, producto.nombre, producto.imagen);
    };

    if (error) return <Error mensaje={error} />;
    if (!producto) return <SweetAlert2Wait />;

    return (
        <div className="divItemDetail">
            <h1 className="h1ItemDetail">Detalle del Producto</h1>
            <img src={producto.imagen} alt="imagen producto" className="imgItemDetail" />
            <h2 className="h2ItemDetail">{producto.nombre}</h2>
            <p className="pItemDetail">Precio: ${producto.precio}</p>
            <p className="pItemDetail">Categoría: {producto.categoria}</p>
            <p className="pItemDetail">Cantidad disponible: {producto.cantidad}</p>
            <p className="pItemDetail">Descripción: {producto.descripcion}</p>
            <ItemCount stock={producto.cantidad} initial={1} onAdd={handleAddToCart} />
        </div>
    );
}

export default ItemDetail;


