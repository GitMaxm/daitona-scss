document.addEventListener('DOMContentLoaded', function () {
    const sliderClients = new Swiper('.clients-slider', {
        slidesPerView: 3, // Количество отображаемых слайдов
        spaceBetween: 20, // Расстояние между слайдами
        loop: true, // Бесконечный цикл
        speed: 2000, // Скорость перехода (уменьшите для более медленного эффекта)
        autoplay: {
            delay: 0, // Без задержки
            disableOnInteraction: false, // Продолжить автопроигрывание после взаимодействия
        },
        
        // Отключаем встроенные переходы, чтобы достичь эффекта бегущей строки
        cssMode: false,
        
        // Количество слайдов, которые будут задействованы в цикле
        loopedSlides: 5,
        
        // Адаптивные настройки количества слайдов
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        }
    });
});
