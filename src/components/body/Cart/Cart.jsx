import { useCart } from '../../../assets/Context/cartContext.jsx'; // Asegúrate de que la ruta sea la correcta

function Cart() {
  const { cart, removeFromCart, removeAllFromCart } = useCart(); // Obtener los productos del carrito desde el contexto

  return (
    <div>
      <h1>Tu carrito de compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={removeAllFromCart}>Eliminar todos</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
