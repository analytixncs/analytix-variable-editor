import moment from 'moment';
import _ from 'lodash';
export const UPDATE_GROUP_FILTER = 'UPDATE_GROUP_FILTER';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';
export const UPDATE_LOCKED_FILTER = 'UPDATE_LOCKED_FILTER';


// Filter Actions
export const updateSelectedGroup = groupFilter => {
  // If groupFilter is blank, the reset group to All
  // if (groupFilter === '') {
  //   groupFilter = 'All';
  // }
  return {
    type: UPDATE_GROUP_FILTER,
    payload: groupFilter
  };
};

export const updateTextFilter = textFilter => {
  return {
    type: UPDATE_SEARCH_FILTER,
    payload: textFilter
  };
};

export const updateLockedFilter = (hideLocked) => {
  return {
    type: UPDATE_LOCKED_FILTER,
    payload: hideLocked
  };
};