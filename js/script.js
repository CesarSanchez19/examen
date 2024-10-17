// Espera a que todo el contenido del documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona todos los elementos con la clase 'nav-item'.
    const navItems = document.querySelectorAll('.nav-item');

    // Recorre cada elemento de navegación seleccionado.
    navItems.forEach((item, index) => {

        // Establece un retraso en la adición de la clase 'show' para cada elemento.
        setTimeout(() => {
            item.classList.add('show'); // Agrega la clase 'show' al elemento actual para activarlo.
        }, 100 * index); // El retraso aumenta en 100ms por cada elemento.

    });

});