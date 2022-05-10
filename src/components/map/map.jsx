import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/use-map';

function Map({ address, style }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  useEffect(() => {
    const defaultCustomIcon = new Icon({
      iconUrl: 'public/img/logo192.png',
      iconSize: [27, 39],
      iconAnchor: [13.5, 39],
    });

    if (map) {
      const marker = new Marker({
        lat: address.Latitude,
        lng: address.Longitude,
      });
      marker
        .setIcon(defaultCustomIcon)
        .addTo(map);
    }
  }, [map, address]);

  return <div data-testid="map" style={{ height: `${style.Height}px`, width: `${style.Width}px` }} ref={mapRef} />;
}

export default Map;
