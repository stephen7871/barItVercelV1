import React, { useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { useSelector } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import PushPinIcon from '@mui/icons-material/PushPin';


const GoogleMaps = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  
const AnyReactComponent = props => {
        
  return (
    <Tooltip title="custom post for campus info (hard coded)">
  <PushPinIcon/>
  </Tooltip>);
  }
 const markerClick = () =>{
  console.log("clicked");
 }
 
 const renderMarkers = (map, maps) => {
    {posts?.map((post) => {
      Geocode.setLanguage("en");
      Geocode.setApiKey("AIzaSyBBoDTa2K0ql0d3ssnlMEYXdBvQLI6_LqA");
      Geocode.fromAddress(post.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
            const Marker = new maps.Marker({
              position: { lat: lat, lng: lng },
              map,
              title: 'Hello World!'
              });
            return Marker;
          },
          (error) => {
            console.error(error);
          }
        );
          })} 
        }

        const renderMyMarkers = (map, maps) => {
          {posts?.map((post) => {
            Geocode.setLanguage("en");
            Geocode.setApiKey("AIzaSyBBoDTa2K0ql0d3ssnlMEYXdBvQLI6_LqA");
            Geocode.fromAddress(post.address).then(
              (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                  const Marker = new maps.Marker({
                    position: { lat: lat, lng: lng },
                    map,
                    title: 'Hello World!',
                   
                    });
                  return Marker;
                },
                (error) => {
                  console.error(error);
                }
              );
                })} 
              }
 return (
   <div style={{ height: '80vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBBoDTa2K0ql0d3ssnlMEYXdBvQLI6_LqA' }}
      defaultCenter={{ lat: 41.80593409999999, lng: -72.25367539999999 }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
     onGoogleApiLoaded={({ map, maps}) => renderMyMarkers(map, maps)}
    >
      {/* <Marker lat={43.80593409999999} lng={-74.25367539999999 }/> */}
      <AnyReactComponent  
         lat={41.80593409999999} lng={-72.25367539999999 }/>
    </GoogleMapReact>
   </div>
 );
};

export default GoogleMaps;
