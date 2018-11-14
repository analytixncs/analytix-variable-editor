import moment from 'moment';
import _ from 'lodash';
import { getApplicationVariables } from '../../fileAccessAPI/nativeFileAccess';

export const LOAD_QV_VARIABLES = 'LOAD_QV_VARIABLES';

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
