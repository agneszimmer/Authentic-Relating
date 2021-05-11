import "../../App.css";
import { popup } from "leaflet";
import { useState } from "react";
import Map from "./Map";

const GroupsMap = ({ groups }) => {
  console.log(groups);
  const center = {
    id: 1,
    lat: 52.518611,
    lng: 12.408333,
  };

  const [locations, setLocation] = useState(groups);
  const [mainLocation, setMainLocation] = useState(center);

  return (
    <Map lat={mainLocation.lat} lng={mainLocation.lng} locations={locations} />
  );
};

export default GroupsMap;
