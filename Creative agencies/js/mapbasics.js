var map, mark;
ymaps.ready(init);

function init () {
  map = new ymaps.Map('map', {
    center: [56.837592, 60.601525],
    zoom: 15,
    controls: []
  });
  
  map.behaviors.disable(['scrollZoom']);
  
  mark = new ymaps.Placemark([56.837592, 60.601525], { 
    hintContent: 'Наш офис',
    balloonContent: 'Столица России' 
  });
  
  map.geoObjects.add(mark);
}