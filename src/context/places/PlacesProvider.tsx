import { useEffect, useReducer } from "react";
import { searchApi } from "../../apis";
import { getUserLocation } from "../../helpers";
import { PlacesResponse } from "../../interfaces/places";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesreducer";

// asi va a lucir el estado de nuestro PlacesContext
export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number],
    direccion: string
}

// este va ser el estado inicial de nuestra aplicacion
const INITIAL_STATE: PlacesState = {
    // cuando la aplicacion cargav siempre va a ser isLoading = true
    isLoading: true,
    userLocation: undefined,
    direccion: ''
}

// Defino esto para decirle de que tipo va a ser mi children al Provider
interface Props {
    children: JSX.Element
}

// Esto va a proveer nuestro PlacesContext
export const PlacesProvider = ({children}: Props) => {
    
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    // un useEffect no lo puedo declarar como async
    useEffect(() => {
        getUserLocation().then((res) => {
            dispatch({type: 'setUserLocation', payload: res})
        })
    },[])


    // use de la api searchApi
    const setPlace = async() => {
        if(!state.userLocation) throw new Error('No hay ubicacion del usuario');
        console.log(state.userLocation.join(','));
        
        // const resp = await searchApi.get(`/${state.userLocation.join('.')}.json`);
        // const resp = await searchApi.get<PlacesResponse>(`reverse?format=json&lon=-60.5282587&lat=-31.7320686`);
        const resp = await searchApi.get<PlacesResponse>(`reverse?format=json&lon=${state.userLocation[0]}lat=${state.userLocation[1]}`);

        
        alert(resp.data);
        
        let direccion = `${resp.data.address.road} ${resp.data.address.house_number}, ${resp.data.address.city}`;
        dispatch({type: 'setDireccion', payload: direccion});
    }



  return (
    <PlacesContext.Provider value={{
        ...state,
        setPlace
    }}>
        {children}

    </PlacesContext.Provider>
  )
}
