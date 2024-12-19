import { productos } from "./productos";

export const fetchProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};