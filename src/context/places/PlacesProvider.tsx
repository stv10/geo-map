import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesreducer";

// asi va a lucir el estado de nuestro PlacesContext
export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number],
}

// este va ser el estado inicial de nuestra aplicacion
const INITIAL_STATE: PlacesState = {
    // cuando la aplicacion cargav siempre va a ser isLoading = true
    isLoading: true,
    userLocation: undefined
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



  return (
    <PlacesContext.Provider value={{
        ...state,
    }}>
        {children}

    </PlacesContext.Provider>
  )
}
