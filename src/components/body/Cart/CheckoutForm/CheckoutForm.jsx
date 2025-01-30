import { useCart } from '../../../../assets/Context/cartContext.jsx';
import { useState } from 'react';

function CheckoutForm() {
    const { clearCart } = useCart(); // limpio el carrito:
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart(); // Limpio el carrito después de finalizar la compra
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre"/>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono"/>
            <button type="submit">Finalizar compra</button>
        </form>
    );
}

export default CheckoutForm;
