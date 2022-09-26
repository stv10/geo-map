import { useContext, useLayoutEffect, useRef } from "react"
import {Map} from "mapbox-gl";
import { PlacesContext, MapContext } from "../context"
import { Loading, BtnCenterLocation } from "./";



export const MapView = () => {

    // Traigo de mi context las variables que tiene dentro
    const {isLoading,userLocation,searchPlacesByTerm} = useContext(PlacesContext);
    const {setCurrentMap} =  useContext(MapContext);

    /*Usamos una referencia para poder renderizar X cantidad de mapas
    Y que estos no dependanm de renderizar en en un container con una id fija
    Como no quiero redibujar nada cuando la ref cambie no la pongo dentro de un state*/
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if(!isLoading) {
        const map = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/light-v10', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
            });
            setCurrentMap(map);
          }
          searchPlacesByTerm('asd');

    }, [isLoading, userLocation])

    if(isLoading) {
        return(<Loading/>)
    }


  return (
    <div ref={mapDiv} className='map-Div'>
    </div>
  )
}
