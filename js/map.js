/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var map = new ymaps.Map('map', {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.88920743633292, 37.594186070131094],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
        [55.88920743633292, 37.594186070131094],
        {
            balloonContent: `
				<div class="balloon">
					<div class="balloon__address">г. Москва, Самая удобная улица<br> д. 100 1 этаж, офис 1</div>
					<div class="balloon__contacts">
						<a href="tel:+79990008585">+7 (999) 000-85-85</a>
					</div>
				</div>
			`,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
        }
    );

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

    //     // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    //     // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}