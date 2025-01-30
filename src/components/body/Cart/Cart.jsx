import { useCart } from '../../../assets/Context/cartContext.jsx';
import CartItem from './CartItem/CartItem.jsx'; 
import CheckoutForm from './CheckoutForm/CheckoutForm.jsx';
import './CartEstilo.css';

function Cart() {
    const { cart, removeAllFromCart } = useCart();

    return (
        <div className="cart-container">
            <h1>Tu carrito de compras</h1>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    <div className="cart-row">
                        <div className="cart-column">
                            <div className="cart-items-container">
                                {cart.map((item) => (
                                    <CartItem 
                                        key={item.id} 
                                        id={item.id} 
                                        title={item.title} 
                                        quantity={item.quantity} 
                                        price={item.price} 
                                        image={item.image} 
                                    />
                                ))}
                            </div>
                            <button className="clear-cart-button" onClick={removeAllFromCart}>Vaciar carrito</button>
                        </div>

                        <div className="cart-column">
                            {cart.length > 0 && <CheckoutForm />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;