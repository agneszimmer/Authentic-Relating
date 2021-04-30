import "../App.css";
import { popup } from 'leaflet';
import { useState } from 'react';
import Map from '../components/Map'

const Contact = () => {
  const center= {
    id: 1,
      name: 'Berlin',
      lat: 52.518611,
      lng: 13.408333,
      popup: 'Authentic Relating Games Berlin'
  }
  const places = [
    { 
      id: 1,
      name: 'Berlin',
      lat: 52.518611,
      lng: 13.408333,
      popup: 'Authentic Relating Games Berlin'
    },
    { 
      id: 2,
      name: 'Hamburg',
      lat: 53.550556,
      lng: 9.993333,
      popup: 'Authentic Relating Games Hamburg'
    },
    { 
      id: 3,
      name: 'Freiburg',
      lat: 47.994828,
      lng: 7.849881,
      popup: 'Authentic Relating Games Freiburg'
    }
  ]
  const [locations, setLocation] = useState(places);
  const [mainLocation, setMainLocation] = useState(center)
  return (
    <div>
      <div>
        <h2>Authentic Relating Games and Circling Groups in Germany</h2>
          <div class="box">
            <p>Musterstr. 1</p>
            <p>Berlin</p>
            <p>Tel. xxxx/xxxxxxxx</p>
          </div>
          <div class="box">
            <p>Musterstr. 2</p>
            <p>Hamburg</p>
            <p>Tel. xxxx/xxxxxxxx</p> 
          </div>
          <div class="box">
            <p>Musterstr. 3</p>
            <p>Freiburg</p>
            <p>Tel. xxxx/xxxxxxxx</p>  
          </div>
      </div>
      <div className='block'>
        <Map lat={mainLocation.lat} lng={mainLocation.lng} locations={locations}/>
      </div>
    </div>
  );
};
  
export default Contact;
