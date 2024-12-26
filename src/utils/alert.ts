import Swal, { SweetAlertIcon } from 'sweetalert2'
export default function toast(icon: SweetAlertIcon, title: string) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    return Toast.fire({
        icon: icon,
        title: title,
    });
}