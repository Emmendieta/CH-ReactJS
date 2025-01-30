import { useCart } from '../../../../assets/Context/cartContext.jsx';
import { useState } from 'react';
import SweetAlert2CompraExitosa from '../../sweetAlert2/SweetAlert2CompraExitosa.jsx'; 
import './CheckoutFormEstilo.css';

function CheckoutForm() {
    const { clearCart } = useCart(); // Limpio el carrito
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });
    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    // Expresiones regulares para validación
    const regexName = /^[a-zA-Z\s]+$/; 
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    const regexPhone = /^[0-9]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        let formErrors = { ...errors };
        let isValid = true;
        // Valido nombre
        if (!regexName.test(formData.nombre)) {
            formErrors.nombre = 'El nombre solo puede contener letras y espacios.';
            isValid = false;
        } else {
            formErrors.nombre = '';
        }
        // Valido apellido
        if (!regexName.test(formData.apellido)) {
            formErrors.apellido = 'El apellido solo puede contener letras y espacios.';
            isValid = false;
        } else {
            formErrors.apellido = '';
        }
        // Valido email
        if (!regexEmail.test(formData.email)) {
            formErrors.email = 'Por favor ingresa un correo electrónico válido.';
            isValid = false;
        } else {
            formErrors.email = '';
        }
        // Valido teléfono
        if (!regexPhone.test(formData.telefono)) {
            formErrors.telefono = 'El teléfono debe contener solo números.';
            isValid = false;
        } else {
            formErrors.telefono = '';
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Formulario enviado con los datos:', formData);
            clearCart(); // Limpio el carrito después de finalizar la compra
            SweetAlert2CompraExitosa(); 
        } else {
            console.log('Formulario no válido.');
        }
    };

    return (
        <div className="checkout-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre"/>
                {errors.nombre && <span className="error">{errors.nombre}</span>}

                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" />
                {errors.apellido && <span className="error">{errors.apellido}</span>}

                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                {errors.email && <span className="error">{errors.email}</span>}

                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" />
                {errors.telefono && <span className="error">{errors.telefono}</span>}

                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    );
}

export default CheckoutForm;
