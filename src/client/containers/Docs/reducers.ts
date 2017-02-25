import * as types from './constants';
import { Action, ErrorType } from './types';

export interface DocsState {
  markdownContent?: string;
  error?: ErrorType;
  isLoading: boolean;
}

export const initialState: DocsState = {
  markdownContent: null,
  error: null,
  isLoading: false,
};

const docsReducer = (state: DocsState = initialState, action: Action<any>): DocsState => {
  switch (action.type) {
  case types.LOAD_INTIATION:
    return Object.assign({}, state, {
      isLoading: true,
    });
  case types.LOAD_SUCCESS:
    return Object.assign({}, state, {
      isLoading: false,
      markdownContent: action.payload.data,
    });
  case types.LOAD_FAILURE:
    return Object.assign({}, state, {
      isLoading: false,
      error: action.payload.error,
    });
  default:
    return state;
  }
};

export default docsReducer;
