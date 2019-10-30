import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function fileReducer(state = initialState.file, action) {
  switch (action.type) {
    case types.GET_FILE_DATA:
      const newState = { ...action.fileData };
      newState.pathToFile = state.pathToFile;
      return newState;
    case types.UPDATE_PATH_TO_FILE:
      state.pathToFile = action.path;
      return { ...state };
    default:
      return state;
  }
}
