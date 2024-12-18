import { productos } from "../../../baseDatos/productos";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";
import './EstiloItemListContainer.css';
import Error from "../error/Error.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const {categoria} = useParams();
    const productosFiltrados = categoria ? productos.filter(productoBD => productoBD.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase())
    : productos;

    if (productosFiltrados.length === 0 ) {
        return <Error mensaje="No existe la categoría indicada" />;
    }
    return (
        <div className="divItemListContainer">
            {productosFiltrados.map(producto => (
                <ItemDetailContainer key={producto.id} {...producto} />
            ))}
        </div>
    );
}

export default ItemListContainer;
