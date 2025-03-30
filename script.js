var swiper = new Swiper('.swiper-container', {
    loop: false, // Asegura que el carrusel funcione en bucle infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite que los puntos de paginación sean clicables
    },
    autoplay: {
        delay: 3000, // Cambia de slide automáticamente cada 3 segundos
        disableOnInteraction: false, // Continúa el autoplay incluso después de interacción
    },
    speed: 500, // Velocidad de transición entre slides
});
