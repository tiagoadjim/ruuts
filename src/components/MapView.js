import React from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvent, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from "./Markers";



const MapView = () => { 
    
//Muestro pinamar 
    return <MapContainer center={{lat: '-37.0980823', lng: '-56.8773958'}} zoom={13}>
<Markers/>
    </MapContainer>

};

export default MapView;