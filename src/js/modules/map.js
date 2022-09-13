export default function map() 
{
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [40.1767473012655, 44.5158], 
            zoom: 16.5,
            controls: []
        });

        myMap.geoObjects.add(new ymaps.Placemark([40.1767473012655, 44.51258862684945], {
            balloonContent: '<h4>Go Language School<h4/>'
        }, {
            preset: 'islands#blueEducationIcon',
            iconColor: '#9C598E'
        }))
        myMap.behaviors.disable(['scrollZoom']);
        var body = document.getElementsByTagName('body')[0];
        body.onkeydown = callbackDown;
        body.onkeyup = callbackUp;
        function callbackDown(e){
            if(e.keyCode === 17){
                myMap.behaviors.enable(['scrollZoom']);
            }
        }
        function callbackUp(e){
            if(e.keyCode === 17){
                myMap.behaviors.disable(['scrollZoom']);
            }
        }
    }
    
}