import {combineReducers} from 'redux';

import {contadorReducer} from './contador/contador-reducer';

//El root reducer es necesario para poder juntar todos los reducers que creemos en la aplicación
export default combineReducers({contadorReducer});