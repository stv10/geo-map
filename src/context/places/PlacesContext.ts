import { createContext } from "react";

// Solo para saber los propiedades que va a tener este contexto
export interface PlacesContextProps {
    isLoading: boolean,
    userLocation?: [number, number],
    searchPlacesByTerm: (query: string) => Promise<any>;
}

/* Aqui creamos el contexto de Places
 La diferencia entre estado y contexto
es que el ESTADO es la informacion que guardamos en memoria
y el CONTEXTO es lo que nosotros le exponemos o mostramos a los demas componentes*/
export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)