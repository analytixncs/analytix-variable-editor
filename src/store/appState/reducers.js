import _ from 'lodash';

import { UPDATE_GROUP_FILTER, 
  UPDATE_SEARCH_FILTER,
  UPDATE_LOCKED_FILTER
} from './actions';

/**
 * appState: {
    groupFilter: '',
    selectedVariableId: null,
    editing: false,
    searchText: '',
    hideLocked: false,
    user: 'user'
  }
 */
const appStateReducer = (state =[], action) => {
  console.log('group action', action)
  switch(action.type) {
    case UPDATE_GROUP_FILTER:
      return { ...state, groupFilter: action.payload};
    case UPDATE_SEARCH_FILTER:
      return { ...state, textFilter: action.payload}
    case UPDATE_LOCKED_FILTER:
      return { ...state, hideLocked: action.payload}
    default: 
      return state;
  }
}

export default appStateReducer;

