// import { Marker } from 'mapbox-gl'; 
import L, { Map, Marker } from 'leaflet';
import { useReducer } from 'react';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';

export interface MapState {
    isMapReady: boolean;
    map?: Map;
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}

interface Props  {
    children: JSX.Element | JSX.Element[]
}




export const MapProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const setCurrentMap = (map: Map) => {
        L.marker(map.getCenter()).addTo(map);

        dispatch({type: 'setCurrentMap', payload: map})
    }
    
  return (
    <MapContext.Provider value={{
        ...state,
        setCurrentMap
    }}>
        {children}
    </MapContext.Provider>
  )
}
