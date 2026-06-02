// Manejo de eventos de los botones principales del Home
function navigate(action) {
    console.log(`Navegando a: ${action}`);
    
    switch(action) {
        case 'vender':
            alert("Accediendo al Módulo de Emisión y Venta de Pasajes Interurbanos.");
            break;
        case 'vendidos':
            alert("Abriendo el Registro Histórico de Pasajes Vendidos del Turno.");
            break;
        case 'reservas':
            alert("Abriendo el Listado y Validación de Pasajes Reservados.");
            break;
        case 'cancelar':
            alert("Abriendo el Panel de Cancelación y Reembolso de Boletos.");
            break;
        default:
            console.error("Acción no válida");
    }
}

// Simulación de navegación en los ítems de la barra lateral
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Confirmación para cerrar sesión
document.querySelector('.btn-logout').addEventListener('click', () => {
    if(confirm("¿Desea cerrar la sesión del operador actual en SITRAM?")) {
        alert("Sesión finalizada con éxito.");
    }
});