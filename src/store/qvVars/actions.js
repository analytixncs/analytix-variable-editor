import moment from 'moment';
import _ from 'lodash';
import { getApplicationVariables,
  updateQlikVariable } from '../../fileAccessAPI/nativeFileAccess';

export const LOAD_QV_VARIABLES = 'LOAD_QV_VARIABLES';
export const UPDATE_QV_VARIABLE = 'UPDATE_QV_VARIABLE';

export const startLoadQvVariables = (appName) => {
  return (dispatch, getState) => {
    getApplicationVariables(appName)
      .then(qvVariables => {
        console.log('getappvars', qvVariables)
        dispatch(loadQvVariables(qvVariables, appName))
      })
  }
};

const loadQvVariables = (qvVariables) => {
  return {
    type: LOAD_QV_VARIABLES,
    payload: qvVariables
  }
};


export const startUpdateQvVariable = (qvVariable) => {
  return (dispatch) => {
    updateQlikVariable(qvVariable)
      .then(result => dispatch(updateQvVariable))
  }
}

export const updateQvVariable = (qvVariable) => {
  return {
    type: UPDATE_QV_VARIABLE,
    payload: qvVariable
  }
}