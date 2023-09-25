import React from 'react'



//aca creamos la funcion pie de pagina q va a llevar todos mis datos para tener algo en el footer
function PieDePagina() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <p className="mb-3 mb-md-0 text-body-secondary" style={{color: 'violet'}}>JUAN SILVA <br /> INSTITUTO TECNICO SUPERIOR - Cipolletti, Río Negro Argentina</p>
        </div>
      </footer>
    </>

  )
}

export default PieDePagina