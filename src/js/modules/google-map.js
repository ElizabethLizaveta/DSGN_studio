import googleMapStyles from './googleMapStyles';

const googleMap = (($) => {
  function createMap() {
    const $maps = $('.map');
    $maps.each(function getAttr() {
      const $currentMap = $(this)[0];
      const $lng = +$(this).attr('data-lng');
      const $lat = +$(this).attr('data-lat');
      const $pin = $(this).attr('data-pin-img');
      function initMap() {
        const uluru = { lat: $lat, lng: $lng };
        const map = new google.maps.Map($currentMap, {
          zoom: 11,
          center: uluru,
          styles: googleMapStyles,
        });
        const marker = new google.maps.Marker({ position: uluru, map, icon: $pin });
      }
      window.initMap = initMap;
    });
  }
  const init = () => {
    createMap();
  };
  return { init };
})(jQuery);

export default googleMap;
