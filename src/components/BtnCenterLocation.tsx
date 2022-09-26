import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnCenterLocation = () => {
    const {userLocation} = useContext(PlacesContext);
    const {isMapReady, map} = useContext(MapContext);

    const onClick = () => {
        if(!isMapReady) throw new Error('El mapa no esta listo');
        if(!userLocation) throw new Error('La ubicacion del usuario no existe');

        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }
  return (
    <button onClick={onClick} className="btn-location btn btn-primary">
        Mi Ubicacion
    </button>
  )
}
