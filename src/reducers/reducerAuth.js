import {
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_FAILURE,
  AUTH_SET_LOADING
} from "../actions/types";

const INITIAL_STATE = {
  id_token: undefined,
  username: undefined,
  errorSignIn: undefined,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return { ...state, loading: true };
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        id_token: action.payload.id_token,
        errorSignIn: undefined
      };
    case AUTH_SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        username: undefined,
        id_token: undefined,
        errorSignIn: action.payload.errorSignIn
      };

    case AUTH_SET_LOADING:
      return {
        ...state,
        id_token: undefined,
        username: undefined,
        errorSignIn: undefined,
        loading: action.payload
      };
    default:
      console.log("reducerAuth default ??? unhandled action.type: ", action.type);
      return state;
  }
};
