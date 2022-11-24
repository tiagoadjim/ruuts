import React from 'react'
import {Marker, TileLayer, Popup} from 'react-leaflet'
import { useMapEvents } from 'react-leaflet'


const Markers = () => {
  const map = useMapEvents({
    click:(location) => {
        console.log(map.locate())
        console.log(location)
    }
    //locationfound: (location) => {       console.log('location found:', location)     }
}) 
  return ( 
    <>
    <TileLayer attribution='&copy; <a href="https://ruuts.la">Ruuts</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<Marker position={{lat: '-37.0980823', lng: '-56.8773958'}}>

<Popup>
¡Todavía falta para el Verano! 
</Popup>

</Marker></>
    
    
  )
}

export default Markers