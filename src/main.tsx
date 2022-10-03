import React from 'react'
import { MapasApp } from './MapasApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
// Para esto funcione primero tuve que realizar npm i --save-dev @types/mapbox-gl
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LoginScreen } from './screens/LoginScreen';
import { MapProvider, PlacesProvider } from './context';
 
// Este es el token de mi cuenta creada en MapBox
mapboxgl.accessToken = 'pk.eyJ1Ijoic3R2MTAiLCJhIjoiY2w4YzVrMHBuMDNrMTNwcHA5Z3VpZ212MSJ9.sg-PkET99yjyR9OBEVrpzA';

// Si el navegador o dispositivo de la persona no tiene geo nuestra app no seguira corriendo
if(!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocation!');
  throw new Error('Tu navegador no tiene opción de Geolocation')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PlacesProvider>
      <MapProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginScreen />} >
            </Route>    
            <Route path='/geo' element={<MapasApp />} />
          </Routes>
        </BrowserRouter>
      </MapProvider>
    </ PlacesProvider>
  </React.StrictMode>
)
