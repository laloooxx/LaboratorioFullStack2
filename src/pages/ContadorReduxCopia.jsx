import React from "react";
import ReactDOM  from "react-dom";
import { createStore } from "redux";

//creamos el contador con sus funcionalidades
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTO':
            return state + 1;
        case 'DECREMENTO': 
            return state - 1;
        case 'CERO':
            return 0
        default: 
            return state;
    }
};

//creamos el store, q es donde va a guardar la memoria del contador
const store = createStore(counterReducer);


//creamos la funcion q vamos a exportar al resto de la aplicacion 
export default function ContadorRedux() {
    return (
        <div>
            <div style={{color: 'white'}}>
                {store.getState()}
            </div>
            <button onClick={e => store.dispatch({ type: 'INCREMENTO'})}>Plus Ultra</button>
            <button onClick={e => store.dispatch({ type: 'DECREMENTO'})}>Minus Ultra</button>
            <button onClick={e => store.dispatch({ type: 'CERO'})}>Zerito</button>
        </div>
    )
};