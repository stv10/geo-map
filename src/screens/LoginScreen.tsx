import { logo } from '../assets'

export const LoginScreen = () => {
  return (
    <div className='container-fluid p-0 vh-100 bg-light'>
        <nav className='navbar navbar-light bg-light p-0 h-auto'>
            <figure className='navbar-brand py-2 mb-0 mx-2 align-items-center'>
                <img src={logo} alt="T.C.E.R" width='35px' className='figure-img img-fluid m-0'/>
                <figcaption className='ms-1 figure-caption d-inline fs-5 text-primary'>TCER Geo</figcaption>
            </figure>
        </nav>
        <div className='container-fluid flex-column h-75 d-flex bg-light justify-content-center align-items-center border-0'>
            <h2>Geolocalizacion</h2>
            <div className='card col-4 text-center border p-3'>
                <form>
                    <label htmlFor="userInput" className='form-label'>Usuario</label>
                    <input type="text" placeholder='Nombre de Usuario' className='form-control' id='userInput'/>
                    <label htmlFor="pswdInput">Contrase&ntilde;a</label>
                    <input type='password' placeholder='Contraseña' className='form-control' id='pswdInput'/>
                </form>
            </div>
        </div>
    </div>
  )
}
