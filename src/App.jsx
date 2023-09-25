import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Producto from './pages/Productos';
import Contacto from './pages/Contacto';
import Probando from './pages/Probando';
import ConsumiendoApis from './pages/ConsumiendoApi';
import ContadorRedux from './pages/ContadorRedux';
import Create from '../firebase/Create';

//creamos la funcion principal llamada App, q va a ser como mi "menu" y voy a tener todas las conexiones a las distintas paginas con las rutos de react router dom, q se usa con la etiqueta Routes, dentro una etiqueta Route con sus caracteristicas "path" diciendo cual va a ser la ruta q va a tener q dirigirse dentro de la pagina web y el "element" q es donde se va a dirigir el elemento dentro de nuestro codigo (en llaves y con las etiquetas diciendo q es un componente de react)

function App() {
  return (
    <>
    <Routes>
      <Route path='/inicio' element={<Inicio />} />
      <Route path='/productos' element={<Producto />} />
      <Route path='/acerca-de' element={<AcercaDe />} />
      <Route path='/probando' element={<Probando />} />
      <Route path='/consumiendo-apis' element={<ConsumiendoApis />} />
      <Route path='/contador-redux' element={<ContadorRedux />} />
      <Route path='/crear' element={<Create />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
    </>
  )
}

export default App;
