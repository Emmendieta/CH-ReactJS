import Swal from 'sweetalert2';

function SweetAlert2CompraExitosa() {
    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Compra realizada con éxito!',
            text: 'Gracias por tu compra. ¡Te esperamos pronto!',
            confirmButtonText: 'Cerrar',
        });
    };

    return showSuccessAlert(); 
}

export default SweetAlert2CompraExitosa;