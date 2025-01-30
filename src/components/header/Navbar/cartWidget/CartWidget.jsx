import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../assets/Context/cartContext.jsx'; 
import './EstiloCartWidget.css';

function CartWidget() {
  const { cart } = useCart(); // Obtener los productos del carrito desde el contexto
  const navigate = useNavigate(); // Hook para redirigir

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Obtengo la cantidad total de productos en el carrito

  const handleClick = () => {
    navigate('/cart'); // Redirecciono al carrito
  };

  return (
    <div id="divCartWidget" style={{ position: "relative" }} onClick={handleClick}>
      <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "white" }} id="hdNbCart"></i>
      <span
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "red",
          borderRadius: "50%",
          color: "white",
          padding: "0.2em 0.6em",
          fontSize: "0.75em",
          fontWeight: "bold",
          zIndex: "1",
        }}
      >
        {totalItems} {/* Muestra el número total de productos */}
      </span>
    </div>
  );
}

export default CartWidget;
