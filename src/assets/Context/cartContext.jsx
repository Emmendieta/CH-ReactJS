import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar al carrito
    const addToCart = (productId, quantity, price, title, image) => {
        const existingProduct = cart.find((item) => item.id === productId);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCart([...cart, { id: productId, quantity, price, title, image }]);
        }
    };

    //Obtengo la cantidad total de productos en el carrito:
    const getCartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    //Elimino un producto del carrito especifico:
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Elimino todos los productos del carrito:
    const removeAllFromCart = () => {
        setCart([]);
    };

    // Limpio el carrito como si se hizo correctamente la compra:
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                getCartItemCount,
                removeFromCart,
                removeAllFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};