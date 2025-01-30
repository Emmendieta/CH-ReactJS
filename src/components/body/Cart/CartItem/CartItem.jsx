import { useCart } from '../../context/CartContext';

function CartItem({ id, title, quantity, price, image }) {
    const { removeFromCart } = useCart(); // Para eliminar productos

    return (
        <div className="cart-item">
            <img src={image} alt={title} />
            <p>{title} - {quantity} x ${price}</p>
            <button onClick={() => removeFromCart(id)}>Eliminar</button>
        </div>
    );
}

export default CartItem;