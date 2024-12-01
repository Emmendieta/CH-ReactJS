import React from "react";

function CartWidget() {
    return (
        <div id="divCartWidget" style={{ position: "relative" }}>
        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "white" }} id="hdNbCart"></i>
        <span style={{
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "red",
            borderRadius: "50%",
            color: "white",
            padding: "0.2em 0.6em",
            fontSize: "0.75em",
            fontWeight: "bold",
            zIndex: "1"
        }}>
            0 {/* Este número puede ser dinámico en el futuro */}
        </span>
    </div>
    );
}

export default CartWidget;
