import React, { useState, useEffect } from 'react';
import '.././styles/ConsumiendoApis.css';

//aca creamos una pestaña para consumir appis, utiliando useEffect y useState, esto todavia lo tengo q ver bien para hacerlo mejor y entender bien el consumo de apis en react
function ConsumiendoApis() {
    //llamamos al useState para calcular los errores, para mostrar la carga de las apis y mostrar los items q traemos de la consumicion de apis
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // Nota: el array de dependencias [] viene vacio
    // este useEffect correra una sola vez
    // similar a componentDidMount()
    useEffect(() => {
      //invocamos la api con el fetch y sus respectivas promesas con una respuesta y un resultado (q va a ser lo q traemos de la api)
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setItems(result.results);
    },
    // es importante manejar errores aquí y no en
    // un bloque catch() para que no interceptemos errores
    // de errores reales en los componentes.
    (error) => {
        setIsLoaded(true);
        setError(error);
    })
    }, [])
    //si hay un error lo mostramos con su mensaje y si no mostramos q esta cargando y esta haciendo la llamada a la api
    if (error) {
        return <div style={{color: 'white'}}>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{color: 'white'}}>Loading...</div>;
    } else {
        //aca retornamos lo q recibimos de la api y lo mostramos en la pagina
        return (
            <div className='card-container'>
              {items.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Genero: {item.gender}</p>
                  </div>
                </div>
              ))}
            </div>
          );
    }
}

export default ConsumiendoApis;