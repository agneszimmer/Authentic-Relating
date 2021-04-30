import { useState } from 'react';
import MapTabs from './MapTabs';

const Contact = () => {
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
  return (
    <div>
      <div>
        <h2>Authentic Relating Games and Circling Groups in Germany</h2>
        <p>Musterstr. 1</p>
        <p>Berlin</p>
        <p>Tel. xxxx/xxxxxxxx</p><br></br>
      </div>
      <div>
        <p>Hast Du Fragen, Wünsche oder Anregungen? Bitte nimm Kontakt mit uns auf, wir helfen Dir gerne weiter!</p>
        <p>authentic.relating@gmail.com</p>
      </div>
      <div className='block'>
        <MapTabs locations={locations} />
      </div>
    </div>
  );
};
  
export default Contact;
