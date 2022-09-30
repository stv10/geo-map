// import { Map } from 'mapbox-gl'
import { Map } from 'leaflet'
import { MapState } from "./MapProvider"


type MapAction = {
    type: 'setCurrentMap', payload: Map
};


export const mapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case 'setCurrentMap':
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }
        default:
            return state;
    }
}
