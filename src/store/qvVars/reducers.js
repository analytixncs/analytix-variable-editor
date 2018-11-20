import _ from 'lodash';

import { LOAD_QV_VARIABLES, UPDATE_QV_VARIABLE
} from './actions';


const qvVariablesReducer = (state =[], action) => {
  switch(action.type) {
    case LOAD_QV_VARIABLES:
      return action.payload;
    case UPDATE_QV_VARIABLE:
      console.log('updating QVVariable', action.payload)
      let newState = state.filter(qvVar => qvVar.id !== action.payload.id)
      
      return [...newState, action.payload];
    default: 
      return state;
  }
}

export default qvVariablesReducer;

