import React from "react";
import { connect } from "react-redux"; // Importa connect desde react-redux

// Definimos el reducer y creamos el store 

// Definimos el componente ContadorRedux
function ContadorRedux({ count, increment, decrement, reset }) {
    return (
        <div>
            <div style={{ color: 'white' }}>
                {count}
            </div>
            <button onClick={increment}>Plus Ultra</button>
            <button onClick={decrement}>Minus Ultra</button>
            <button onClick={reset}>Zerito</button>
        </div>
    );
}

// Mapea el estado a las props del componente
const mapStateToProps = state => {
    return {
        count: state
    };
};

// Mapea las acciones a las props del componente
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'ZERO' })
    };
};

// Conecta el componente con Redux y mapea las props
export default connect(mapStateToProps, mapDispatchToProps)(ContadorRedux);

