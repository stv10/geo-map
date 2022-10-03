import { useContext, useState } from "react"
import { MapView } from "../components"
import { calendar, clock, location } from "../assets"
import { PlacesContext } from "../context"
export const HomeScreen = () => {

    const { direccion } = useContext(PlacesContext);
    const [estado, setEstado] = useState({
        fecha: new Date()
    })

    setInterval(() => {
        setEstado({
            ...estado,
            fecha: new Date()
        })
    }, 10)
    return (
        <div className="container-fluid p-0 ">
            {/* Navbar principal */}
            <div className="navbar navbar-expand navbar-primary bg-primary">
                <div className="container-fluid">
                    <div className="toggler">Toggler</div>
                    <span className="">Nombre Usuario</span>
                    <div className="form-check form-switch">
                        <input type="checkbox" className="form-check-input" role='switch' id="flexSwitch" />
                        <label htmlFor="flexSwitch" className='form-check-label'>Ubicacion</label>
                    </div>
                </div>
            </div>
            <div className="container col-12 col-sm-10 col-md-6">
                <div className="container p-0 border border-secondary mt-2 map-Div">
                    {/* Mapa */}
                    <MapView />
                </div>
                <div className="container-fluid my-2">
                    <div className="row bg-danger rounded-top align-items-center">
                        <figure className='figure text-center text-md-end col-12 col-md-6 m-0 p-1'>
                            <img src={calendar} alt="Fecha: " className='figure-img img-fluid icon' />
                            <figcaption className='text-light figure-caption d-inline ms-1'>{estado.fecha.toLocaleDateString()}</figcaption>
                        </figure>
                        <figure className='figure text-center text-md-start col-12 col-md-6 m-0 p-1'>
                            <img src={clock} alt="Hora: " className='figure-img img-fluid icon' />
                            <figcaption className='fs-5 text-light figure-caption d-inline ms-1'>
                                {`${estado.fecha.getHours()}:
                        ${(estado.fecha.getMinutes() < 10 ? `0${estado.fecha.getMinutes()}` : estado.fecha.getMinutes())}`}</figcaption>
                        </figure>
                    </div>
                    <div className="row bg-secondary rounded-bottom align-items-center">
                        <figure className='figure col-12 text-center m-0 p-1'>
                            <img src={location} alt="Direccion: " className="figure-img img-fluid icon" />
                            <figcaption className=' text-light figure-caption d-inline'>{direccion}</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container rounded text-center p-2 bg-info bg-opacity-10 border border-info">
                    <h3 className="h3">OPCIONES DE SALIDA</h3>
                </div>
                <div className="row my-2">
                    <div className="col-12 col-lg-4 mb-2">
                        <button className='btn btn-primary w-100'>S.PERSONAL</button>
                    </div>
                    <div className="col-12 col-lg-4 mb-2">
                        <button className='btn btn-primary w-100'>S.SERVICIO</button>
                    </div>
                    <div className="col-12 col-lg-4 mb-2">
                        <button className='btn btn-primary w-100'>S.ESPECIAL</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-2">
                        <button className='btn w-100 btn-outline-danger fw-bold'>CERRAR</button>
                    </div>
                    <div className="col-12 col-lg-8 mb-2">
                        <button className='btn btn-primary w-100 '>FICHAR</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
