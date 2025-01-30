import Swal from 'sweetalert2';

function SweetAlert2ProductoAgregado() {
    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Feliciades!',
            text: 'Se agrego correctamente el Producto a su carrito!',
            confirmButtonText: 'Cerrar',
        });
    };

    return showSuccessAlert(); 
}

export default SweetAlert2ProductoAgregado;