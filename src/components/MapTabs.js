import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Map from './Map';
import 'react-tabs/style/react-tabs.css';

const MapTabs = ({ locations }) => {
  return (
    <Tabs>
      <TabList>
        {locations.map(location => (
          <Tab key={`tab-${location.id}`}>
            {location.name}</Tab>
        ))}
      </TabList>
      {locations.map(location => (
        <TabPanel key={`tabpanel-${location.id}`}>
          <h2>{location.name}</h2>
          <Map />
        </TabPanel>
      ))}
    </Tabs>        
  )
}

export default MapTabs;