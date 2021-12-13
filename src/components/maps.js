import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    border : '2px solid black',
    margin : '15px'
  };
const Map = (props) => {
    var lat =   parseFloat(props.lat);
    var lon = parseFloat(props.lon);

const center = {    
    lat: lat,
    lng: lon
  };

    return (
        <div>
             <h1>Ubicación</h1>
            <LoadScript googleMapsApiKey="AIzaSyBLb_kpO0s6Y6PBUUaBqp4JKt8CiRNh8ms">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}>
                <Marker position={center} />
            </GoogleMap>
            </LoadScript>

        </div>
       

    );
}

export default Map;
