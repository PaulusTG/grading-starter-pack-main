import { useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';

function useMap(mapRef, centerCoordinates) {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerCoordinates.Latitude,
          lng: centerCoordinates.Longitude,
        },
        zoom: centerCoordinates.Zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, centerCoordinates]);
  return map;
}

export default useMap;
