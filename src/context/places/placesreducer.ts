import { PlacesState } from './PlacesProvider';

/*Solo se van a realizar acciones que esten dentro de nuestro tipo PlacesAction*/
type PlacesAction =
| { type: 'setUserLocation', payload: [number,number] }
| { type: 'setDireccion', payload: string };
/*Esto es una funcion pura que recibe nuestro estado
y devuelve un objeto del mismo tipo luego de realizar
unas acciones, hay muchas maneras de definir las acciones
Usamos type cuando sabemos que es algo que no va a mutar sino que es algo rigido*/
export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
    switch (action.type) {
        case 'setUserLocation':
                return {
                    ...state,
                    isLoading: false,
                    userLocation: action.payload
                    
            };
        case 'setDireccion':
            return {
                ...state,
                direccion: action.payload
            }
        default:
            return state;
    }
}