import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const MapView = () => { 
//Muestro pinamar 
    return <MapContainer center={{lat: '-37.0980823', lng: '-56.8773958'}} zoom={13}>
<TileLayer attribution='&copy; <a href="https://ruuts.la">Ruuts</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<Marker position={{lat: '-37.0980823', lng: '-56.8773958'}}>

<Popup>
¡Todavía falta para el Verano! 
</Popup>

</Marker>
    </MapContainer>

};

export default MapView;