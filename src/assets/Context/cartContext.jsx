import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (productId, quantity, price, title) => {
        const existingProduct = cart.find((item) => item.id === productId);
        
        if (existingProduct) {
            // Aquí reemplazamos la cantidad existente por la nueva
            setCart(
                cart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity } // Reemplazamos la cantidad por la nueva
                        : item
                )
            );
        } else {
            // Si el producto no existe, simplemente lo agregamos
            setCart([...cart, { id: productId, quantity, price, title }]);
        }
    };

    // Obtener cantidad total de productos en el carrito
    const getCartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    // Eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Eliminar todos los productos del carrito
    const removeAllFromCart = () => {
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
            }}
        >
            {children}
        </CartContext.Provider>
    );
};