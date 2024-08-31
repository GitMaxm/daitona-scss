document.addEventListener('DOMContentLoaded', function () {
    const sliderClients = new Swiper('.clients-slider', {
        slidesPerView: 3, // Количество отображаемых слайдов
        spaceBetween: 20, // Расстояние между слайдами
        loop: true, // Бесконечный цикл
        autoplay: {
            delay: 1000, // Задержка перед переключением слайда (в миллисекундах)
            disableOnInteraction: false, // Продолжить автопроигрывание после взаимодействия
        },
        speed: 1000, // Скорость перехода между слайдами (в миллисекундах)
    });
});
