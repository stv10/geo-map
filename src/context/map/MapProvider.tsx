import { Map, Marker } from 'mapbox-gl'; 
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
        new Marker({
            color: 'rgb(33,98,150)'
        })
        .setLngLat(map.getCenter())
        .addTo(map);

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
