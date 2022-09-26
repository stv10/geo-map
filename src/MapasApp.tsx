import { MapProvider, PlacesProvider } from "./context";
import { HomePage } from './screens';
import { HomeScreen } from "./screens";
import  './styles/styles.css'
export const MapasApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        {/* <HomePage /> */}
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
)
}
