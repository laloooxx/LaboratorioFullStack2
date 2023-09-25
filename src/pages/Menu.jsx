import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';


//aca creamos la funcion Menu, q funciona como el menu, un navbar, utilizando bootstrap y Link para conectar con los links determinados.
export default function Menu() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
               <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/inicio' aria-current="page">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/productos'>Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/acerca-de'>Acerca de</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/probando'>Probando useEffect</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/consumiendo-apis'>Consumiendo Apis</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contador-redux'>Contador</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/crear'>Crear documento</Link>
                    </li>
                    <li className="nav-item4">
                        <Link className="nav-link-4" to='/contacto'>Contacto</Link>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
  )
}
