import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu.jsx'
import Footer from './pages/Footer.jsx'
import store from '../src/componentes/Store.jsx'



// llamamos al react strictMode q es para encerrar nuestro browserRouter (q son funciones de react router dom para usar el enrutador de react) y el provider (q es para envolver nuestro store y asi usar el reducer q creamos) y nuestro menu creado anteriormente, footer y la pagina principal App. 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*Envuelvo toda mi aplicacion con el Provider */}

    <BrowserRouter>

    <Menu />
    <App />
    <Footer />

    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
