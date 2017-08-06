ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [56.83667025, 60.59876260],
            zoom: 15
        });

        myPlacemark = new ymaps.Placemark([56.83668840, 60.59876443], {
                iconImageHref: '../img/ph.png'
            });

            myMap.geoObjects.add(myPlacemark);
    }
