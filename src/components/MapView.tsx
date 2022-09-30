import { useContext, useLayoutEffect, useRef } from "react"
// import {Map} from "mapbox-gl";
// import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { PlacesContext, MapContext } from "../context"
import { Loading } from "./";
import L from "leaflet";



export const MapView = () => {

    // Traigo de mi context las variables que tiene dentro
    const {isLoading,userLocation,setPlace} = useContext(PlacesContext);
    const {setCurrentMap} =  useContext(MapContext);

    /*Usamos una referencia para poder renderizar X cantidad de mapas
    Y que estos no dependanm de renderizar en en un container con una id fija
    Como no quiero redibujar nada cuando la ref cambie no la pongo dentro de un state*/
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if(!isLoading) {
        // const map = new Map({
        //     container: mapDiv.current!, // container ID
        //     style: 'mapbox://styles/mapbox/light-v10', // style URL
        //     center: userLocation, // starting position [lng, lat]
        //     zoom: 14, // starting zoom
        //     });
        //     setCurrentMap(map);
        const map = L.map(mapDiv.current!);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        if(userLocation) {
          map.setView({lat: userLocation[1], lng: userLocation[0]},14);
        };
        setCurrentMap(map);
        setPlace();
      }
    }, [isLoading, userLocation])

    if(isLoading) {
        return(<Loading/>)
    }
  return (
    <div ref={mapDiv} className='map-Div'>
      {/* <MapContainer>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={}>

        </Marker>
      </MapContainer> */}
    </div>
  )
}
