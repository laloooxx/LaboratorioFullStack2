import React from 'react'
import Card from '../componentes/Card'
import './Produtos.css'


//creamos la funcion Productos, con 3 componenetes de una tarjeta
function Productos() {
  return (
    <>
    <div className='divProduc'>
      <h4>Primer tarjeta</h4>
      <Card />
      <h4>Segunda tarjeta</h4>
      <Card />
      <h4>Tercera tarjeta</h4>
      <Card />
    </div>
    
    </>

)
}

export default Productos