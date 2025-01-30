import { useCart } from '../../../../assets/Context/cartContext.jsx';

function CartItem({ id, title, quantity, price, image }) {
    const { removeFromCart } = useCart(); //En caso de que quiera eliminar los productos del carrito:
    console.log(image)
    return (
        <div className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={image} alt={title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <p>{title} - {quantity} x ${price}</p>
            <button onClick={() => removeFromCart(id)} style={{ marginLeft: '10px' }}>Eliminar</button>
        </div>
    );
}

export default CartItem;
