import {createStore} from 'redux';

//creamos un store con las acciones q queremos q haga, en este caso un contador con un switch
//tambien creamos una constante para ver el estado
const initialState = 0;
const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('increment');
            return state + 1;
        case 'DECREMENT':
            console.log('DECREMENT');
            return state - 1;
        case 'ZERO': 
            console.log('ZERO');
            return 0;
        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;