/* eslint-disable react/prop-types */
import logo from "../../../assets/logo/logo.png"
import { Link } from 'react-router-dom';
import { customLink, customNavbar, imgLogo } from './navbar.module.css';
import LogOut from "../../Specific/logOut/logOut";
import { useLocation } from 'react-router-dom';
const NavBar = ({user}) => {
  const admin = user?.loguedUser.userFounded.admin
  const location = useLocation();
  const isOnHomePage = location.pathname === '/';

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${customNavbar} w-100 fixed-top `}>
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand pe-3"><img src={logo} className={imgLogo} alt="Logo de sliceHaven"/></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">

            <ul className="navbar-nav">
              {isOnHomePage ?
              <>
              <li className="nav-item pb-1 pe-3">
                <a href="#home" className={`${customLink}`}>Inicio</a>
              </li>
                <li className="nav-item pb-1 pe-3">
                  <a className={`${customLink}`} href="/#reservas">Reservas</a>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <a className={`${customLink}`} href="/#contacto">Contacto</a>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <a className={`${customLink}`} href="/#aboutUs">Quienes somos</a>
                </li>
              </> : 
              <>
                <li className="nav-item pb-1 pe-3">
                  <Link to="/" className={`${customLink}`}>Inicio</Link>
                 </li>
                <li className="nav-item pb-1 pe-3">
                  <Link className={`${customLink}`} to="/">Reservas</Link>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <Link className={`${customLink}`} to="/">Contacto</Link>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <Link className={`${customLink}`} to="/">Quienes somos</Link>
                </li>
              </> 
            }

            <li className="nav-item pb-1 pe-3">
              <Link to="/menu" className={` ${customLink}`} aria-current="page">Menu</Link>
            </li>
            {admin &&
              <li className="nav-item pb-1 pe-3">
                <Link to="/admin" className={`${customLink}`}>Administracion</Link>
              </li>
            }
            {user ? 
              <>
                <li className="nav-item pb-1 pe-3">
                  <Link className={`${customLink}`} to="/misreservas">Mis Reservas</Link>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <LogOut />
                  </li>
                </>
              :
              <>
                <li className="nav-item pb-1 pe-3">
                  <Link to="/register" className={`${customLink}`}>Registrarse</Link>
                </li>
                <li className="nav-item pb-1 pe-3">
                  <Link to="/login" className={`${customLink}`}>Iniciar Sesion</Link>
                </li> 
              </>
            }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar