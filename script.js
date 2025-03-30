var swiper = new Swiper('.swiper-container', {
    loop: true, // Habilita el loop
    speed: 600, // Velocidad de transición
    autoplay: {
        delay: 2500, // Tiempo entre cada slide
        disableOnInteraction: false, // Mantener el autoplay al interactuar
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
