ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.88920743633292, 37.594186070131094],
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([55.88920743633292, 37.594186070131094], null, {
        preset: 'islands#blueDotIcon',
        iconImageOffset: [-1, -220]
    });
    myMap.geoObjects.add(myPlacemark);
}

