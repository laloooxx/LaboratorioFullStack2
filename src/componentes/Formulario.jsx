import React, {Fragment, useState} from 'react';


//creamos la funcion formulario q es la q vamos a exportar
const Formulario = () => {
    //definimos el usestate con sus variables y q nos va a devolver
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        correo: '',
    })

    //creamos una funcion para definir el evento
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    //creamos una funcion para enviar los datos
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido+'' +datos.correo)
    }

    //creamos la pantalla donde se va a ver el formulario, con sus funciones creadas anteriormente
    return (
        <Fragment>
            <h1 style={{color: 'violet'}}>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control"
                    onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control"
                    onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Correo electronico" className="form-control"
                    onChange={handleInputChange} name="correo"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li style={{color: 'violet'}}>{datos.nombre}</li>
                <li style={{color: 'violet'}}>{datos.apellido}</li>
                <li style={{color: 'violet'}}>{datos.correo}</li>
            </ul>
        </Fragment>
    );
}
export default Formulario;
