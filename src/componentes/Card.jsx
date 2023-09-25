import React from 'react'

/**
 * 
 * @returns     <div className='container'>
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="Descripciond de la imagen" />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                <a href="#" className="btn btn-primary">Ir a algún lugar</a>
            </div>
        </div>
    </div>
 */


// creeamos el componente de la tarjeta con bootstrap 
function Card() {
  return (
    <div claclassNamess="card mb-3" style={{ width: '500px;' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="src\imagenes\contodoslospremios.jpg" className="img-fluid rounded-start" alt="messi con todos sus premios" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Lionel Andres Messi</h5>
            <p className="card-text">Esta es una imagen de messi con todos sus premios, tantos individuales como en conjunto con sus diferentes equipos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti magnam maxime blanditiis rem fuga ea vitae velit libero sit, obcaecati expedita officiis, eveniet, rerum sunt eius? Quidem labore at fuga laboriosam quam quod consequuntur neque tempore. Sed harum animi blanditiis eum quisquam! Tempore nobis eaque praesentium commodi quia error laborum minima nisi tenetur eligendi molestias, quo alias, amet excepturi corporis id maxime aut at rerum molestiae esse autem. Earum suscipit quaerat, laborum similique, nemo excepturi alias, aliquam dolores reprehenderit libero odit necessitatibus. Rem necessitatibus iste nemo fugiat, amet esse a deleniti optio et minima veniam magnam molestias dolores vero.</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Card