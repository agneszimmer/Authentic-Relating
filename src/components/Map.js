import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = ({ lat, lng, locations }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     {locations.map(location => ( <Marker position={[location.lat, location.lng]}>
        <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>))}
    </MapContainer>
  )
}

export default Map