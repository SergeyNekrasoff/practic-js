require([
    'jquery',
	'yandexmap'
], function($, yandexmap) {

    ymaps.ready(function() {

        /**
         * Инициализация карт отелей
         */
        $('.js-hotel_map').each(function() {
            var self = this;

            // координаты и масштаб
            var lat     = $(self).data('latitude') || 0.0;
            var lng     = $(self).data('longitude') || 0.0;
            var zoom    = $(self).data('zoom') || 8;
            var address = $('a.js-page-menu-adderss:first').text() || '';
            var title   = $('h1:first').text() || '';

            // создание карты
            self.map = new ymaps.Map(self, {
                center: [lat, lng],
                zoom: zoom,
                behaviors: ['scrollZoom', 'drag']
            }, {
                searchControlProvider: 'yandex#search'
            });

            // добавляем маркер
            self.marker = new ymaps.Placemark([lat, lng], {
                balloonContent:     address
            }, {
                iconLayout:         'default#image',
                iconImageHref:      '/app/src/img/map_marker.png',
                iconImageSize:      [34, 50],
                iconImageOffset:    [-15, -50]
            });

            self.map.geoObjects.add(self.marker);
        });

    });

});
