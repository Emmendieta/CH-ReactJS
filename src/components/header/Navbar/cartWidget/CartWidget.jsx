import React from "react";

function CartWidget() {
    const eventoOnClick = () => alert("Carrito de compras en construcción!");
    return (
        <div id="divCartWidget" onClick={eventoOnClick}>
            <i className="fa-solid fa-cart-shopping fa-2xl" style={{color: "white",}} id="hdNbCart"></i>
        </div>
    );
}

export default CartWidget;
