import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../baseDatos/configFirebase.jsx"; // Asegúrate de que la ruta esté correcta
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"; // Importamos ItemDetailContainer
import './EstiloItemListContainer.css'; // Importamos los estilos
import Error from "../error/Error.jsx"; // Importamos componente de error
import SweetAlert2Wait from "../sweetAlert2/SweetAlert2Wait"; // Importamos el sweetalert de carga

function ItemListContainer({ addToCart }) {
    const { categoria } = useParams(); // Obtener la categoría desde la URL
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchProductos = async () => {
            setIsLoading(true); // Se marca como cargando
            try {
                let q = collection(db, "productos"); // Cambiamos la colección a "productos"

                if (categoria) {
                    // Si hay categoría, filtramos los productos por esa categoría
                    q = query(q, where("categoria", "==", categoria));
                }

                const querySnapshot = await getDocs(q);
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (productosData.length === 0) {
                    setError("No existen productos en la categoría indicada.");
                } else {
                    setProductosFiltrados(productosData); // Establecemos los productos filtrados
                }
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setError("Hubo un problema al cargar los productos.");
            } finally {
                setIsLoading(false); // Ya no está cargando
            }
        };

        fetchProductos();
    }, [categoria]); // Solo se ejecuta si la categoría cambia

    // Si ocurre un error, mostramos el mensaje de error
    if (error) return <Error mensaje={error} />;
    // Mientras estamos cargando los productos, mostramos el SweetAlert de carga
    if (isLoading) return <SweetAlert2Wait />;

    // Renderizamos la lista de productos una vez que están cargados
    return (
        <div className="divItemListContainer">
            {productosFiltrados.map((producto) => (
                <ItemDetailContainer
                    key={producto.id}
                    {...producto}
                    addToCart={addToCart} // Pasamos la función de agregar al carrito
                />
            ))}
        </div>
    );
}

export default ItemListContainer;
