import React from 'react'



//cremos un componenete q sea un carrusel de fotos de messi, con bootstrap y haciendo q cada uno tengo sus cosas
export default function CarruselMessi() {
  return (
    <div id="carouselExampleControls" className="carousel slide text-center" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src='https://idsb.tmgrup.com.tr/ly/uploads/images/2022/12/19/247181.jpg' className="mx-auto d-block img-fluid" alt="messi con la copa"/>
            </div>
            <div className="carousel-item">
                <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg" className="mx-auto d-block img-fluid" alt="messi festejando golcito en el barca"/>
            </div>
            <div className="carousel-item">
                <img src="https://estaticos-cdn.sport.es/clip/e443d7b0-f9a3-49bf-9db3-55b086a0eaf8_alta-libre-aspect-ratio_default_0.jpg" className="mx-auto d-block img-fluid" alt="messi en el festejo del mundial"/>
        </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
        </button>
  </div>
  )
}
