import { useState } from 'react';
import SweetAlert2ProductoAgregado from '../../../sweetAlert2/SweetAlert2ProductoAgregado.jsx'; 
import './EstiloItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
        onAdd(count);  
        SweetAlert2ProductoAgregado(); 
    };

    return (
        <div className="divItemCount">
            <button className="btn btn-secondary btnRemoveItemCount" onClick={handleDecrement}>-</button>
            <span id='spanItemCount'>{count}</span>
            <button className="btn btn-secondary btnAddItemCount" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btnAgregarCarritoItemCount" onClick={handleAddToCart}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;


