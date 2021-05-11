import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import markerCustom from "../../pictures/marker.png";
import { Icon } from "leaflet";

const Map = ({ lat, lng, locations }) => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [25, 25],
  });

  console.log(locations);

  return (
    <MapContainer center={[lat, lng]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker position={[location.lat, location.lng]} icon={icon}>
          <Popup>
            {location.groupname}
            <Link target="_blank" to={{ pathname: `${location.contact}` }}>
              {location.contact}
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
