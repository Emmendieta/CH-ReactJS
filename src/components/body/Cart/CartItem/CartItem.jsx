import { useCart } from '../../../../assets/Context/cartContext.jsx';
import './CartItemEstilo.css';

function CartItem({ id, title, quantity, price, image }) {
    const { removeFromCart } = useCart();

    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <div className="cart-item-info">
                    <img src={image} alt={title} />
                    <p>{title} - {quantity} x ${price}</p>
                </div>
                <button onClick={() => removeFromCart(id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default CartItem;