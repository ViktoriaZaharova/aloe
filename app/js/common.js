// maps
ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [53.215742, 44.998526],
        zoom: 16
    });

    var place1 = new ymaps.Placemark(
        [53.215742, 44.998526], {
            hintContent: '',
        }, {
            iconImageHref: 'img/location.svg',
            iconImageSize: [91, 121],
            iconLayout: 'default#image',
        }
    );


    map.geoObjects.add(place1);
});
