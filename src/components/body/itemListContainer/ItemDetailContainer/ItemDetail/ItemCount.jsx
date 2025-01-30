import { useState } from 'react';
import './EstiloItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="divItemCount">
            <button className="btn btn-secondary btnRemoveItemCount" onClick={handleDecrement}>-</button>
            <span id='spanItemCount'>{count}</span>
            <button className="btn btn-secondary btnAddItemCount" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary btnAgregarCarritoItemCount" onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;

