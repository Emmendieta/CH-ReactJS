import { useCart } from '../../../assets/Context/cartContext.jsx';
import CartItem from './CartItem/CartItem.jsx'; 
import CheckoutForm from './CheckoutForm/CheckoutForm.jsx';

function Cart() {
    const { cart, removeAllFromCart } = useCart(); // Obtengo los productos del carrito desde el contexto

    return (
        <div>
            <h1>Tu carrito de compras</h1>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    <div>
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
                    <button onClick={removeAllFromCart} style={{ marginTop: '20px' }}>Vaciar carrito</button>
                </div>
            )}
            {cart.length > 0 && <CheckoutForm />}
        </div>
    );
}

export default Cart;
