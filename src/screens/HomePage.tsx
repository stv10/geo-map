import { BtnCenterLocation, MapView } from '../components'

export const HomePage = () => {

  return (
    <div>
      <div className="container-fluid ">
        <BtnCenterLocation />
        <MapView />
      </div>
      <button className='btn btn-primary'>salida</button>
      <button className='btn btn-primary'>salida</button>
      <button className='btn btn-primary'>salida</button>
    </div>
  )
}
