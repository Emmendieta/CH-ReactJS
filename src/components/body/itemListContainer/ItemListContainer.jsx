import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductos } from "../../../baseDatos/fetchProductos";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import './EstiloItemListContainer.css';
import Error from "../error/Error.jsx";
import SweetAlert2Wait from "../sweetAlert2/SweetAlert2Wait";

function ItemListContainer() {
    const { categoria } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga

    useEffect(() => {
        setIsLoading(true); // Al cambiar de categoría, se marca como cargando
        fetchProductos()
            .then((productos) => {
                const filtrados = categoria ? productos.filter((productoBD) => productoBD.categoria.toLowerCase() === categoria.toLowerCase()) : productos;
                if (filtrados.length === 0) { setError("No existe la categoría indicada");
                } else {
                    setProductosFiltrados(filtrados);
                    setError(null);
                }
            }).catch(() => setError("Hubo un problema al cargar los datos.")).finally(() => setIsLoading(false)); // Cuando termine, marca como no cargando
    }, [categoria]); // El useEffect se ejecuta cada vez que cambie el parámetro `categoria`

    if (error) return <Error mensaje={error} />;
    if (isLoading) return <SweetAlert2Wait/>; 

    return (
        <div className="divItemListContainer">
            {productosFiltrados.map((producto) => (
                <ItemDetailContainer key={producto.id} {...producto} />
            ))}
        </div>
    );
}

export default ItemListContainer;
