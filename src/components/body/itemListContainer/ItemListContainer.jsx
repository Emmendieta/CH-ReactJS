import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../baseDatos/configFirebase.jsx";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"; 
import './EstiloItemListContainer.css'; 
import Error from "../error/Error.jsx"; 
import SweetAlert2Wait from "../sweetAlert2/SweetAlert2Wait"; 

function ItemListContainer({ addToCart }) {
    const { categoria } = useParams(); //Obtengo la categoría desde la URL
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchProductos = async () => {
            setIsLoading(true); 
            try {
                let q = collection(db, "productos"); 

                if (categoria) {
                    // Si existe la categoría, filtrop los productos por esa categoría
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
                    setProductosFiltrados(productosData); //Se establecen los productos filtrados
                }
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setError("Hubo un problema al cargar los productos.");
            } finally {
                setIsLoading(false); 
            }
        };

        fetchProductos();
    }, [categoria]); // Solo se ejecuta si la categoría cambia


    if (error) return <Error mensaje={error} />;
    if (isLoading) return <SweetAlert2Wait />;

    // Renderizo la lista de productos una vez que están cargados
    return (
        <div className="divItemListContainer">
            {productosFiltrados.map((producto) => (
                <ItemDetailContainer
                    key={producto.id}
                    {...producto}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default ItemListContainer;
