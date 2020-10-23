// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


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
