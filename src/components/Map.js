import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerCustom from '../pictures/marker.png';
import { Icon } from 'leaflet';

const Map = ({ lat, lng, locations }) => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [25, 25]
  });

  return (
    <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     {locations.map(location => ( <Marker position={[location.lat, location.lng]} icon={icon}>
        <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>))}
    </MapContainer>
  )
}

export default Map