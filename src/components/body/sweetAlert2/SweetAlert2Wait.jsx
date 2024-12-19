import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

const SweetAlert2Wait = ({ title = "Cargando:", timer = 2000 }) => { 
    const timerInterval = useRef(null);

    useEffect(() => {
        Swal.fire({
            title: title,
            html: "Cargando la información, por favor espere...", 
            timer: timer, 
            timerProgressBar: true,
            didOpen: () => { Swal.showLoading(); },
            willClose: () => {  clearInterval(timerInterval.current); },
        });
        // Limpio y cierrola alerta cuando el componente se desmonta:
        return () => { Swal.close(); };
    }, [title, timer]); // Dependencias para reiniciar la alerta si cambian
    // Este componente no renderiza nada en el DOM (sólo muestra la alerta):
    return null; 
};

export default SweetAlert2Wait;
