// Inicializa Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Habilita el ciclo infinito
    navigation: { // Agrega navegación con botones
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: { // Paginación de los slides (si la quieres agregar)
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: { // Auto Play para deslizar las imágenes automáticamente
        delay: 3000, // Desliza cada 3 segundos
    },
});
