import _ from 'lodash';

import { LOAD_QV_VARIABLES,
} from './actions';

const qvVariablesReducer = (state =[], action) => {
  switch(action.type) {
    case LOAD_QV_VARIABLES:
      return action.payload;
    default: 
      return state;
  }
}

export default qvVariablesReducer;

