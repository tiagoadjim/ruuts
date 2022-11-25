import React, { useState } from 'react'
import { Marker, TileLayer, useMapEvents, Polygon } from 'react-leaflet'
import { icon } from 'leaflet'

import { v4 } from 'uuid'
import Tools from './Tools'
const Markers = () => {

  const [markers, setMarkers] = useState([])
  const [poligonos, setPoligonos] = useState([])
  const [poligonoCreando, setPoligonoCreando] = useState([])

  const [action, setAction] = useState(null)

  const map = useMapEvents({
    click: (location) => {

      switch (action) {
        case 'marker':
            setMarkers([...markers, { lat: location.latlng.lat, lng: location.latlng.lng }])
          return;

        case 'poligono':

          setPoligonoCreando([...poligonoCreando, [location.latlng.lat, location.latlng.lng]])


          if (poligonoCreando.length !== 4) return
          setPoligonos([...poligonos, poligonoCreando])
          setPoligonoCreando([])

          
          return;
      
        default:
          return;
      }

      
    },
    
    //locationfound: (location) => {       console.log('location found:', location)     }
  })

  const myIcon = icon({
    iconUrl: '/markerIcon.png',
    iconSize: [25, 25],

  })

  return (
    <>
    <Tools action={(type) => setAction(type)}/>
    

      <TileLayer attribution='&copy; <a href="https://ruuts.la">Ruuts</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {
        markers.map(marker => <Marker key={v4()} position={{ lat: marker.lat, lng: marker.lng }} icon={myIcon} />)
      }

      {
        poligonoCreando.map(poligono => <Marker key={v4()} position={{ lat: poligono[0], lng: poligono[1] }} icon={myIcon} />)
      }

      <Polygon positions={[[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]]}/>

      {
        poligonos.map(poligono => <Polygon key={v4()} positions={poligono} />)
      }
    </>

  )
}

export default Markers