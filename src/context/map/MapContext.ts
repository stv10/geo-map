import { createContext } from "react";
import { Map } from "leaflet";
// import {Map} from 'mapbox-gl'

interface MapContextProps {
    isMapReady: boolean;
    map?: Map;

    // metodo
    setCurrentMap: (map: Map) => void

}


export const MapContext = createContext({} as MapContextProps);