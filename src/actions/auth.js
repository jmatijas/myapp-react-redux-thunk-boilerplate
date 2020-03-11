import api from "../apis/api";

import {
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_FAILURE,
  AUTH_SET_LOADING
} from "./types";

//
// ACTION CREATOR authSignIn
//
export const authSignIn = (username, password) => async dispatch => {
  dispatch({ type: AUTH_SIGN_IN }); // <<-- reducer will reset auth data and set state.auth.loading = true

  try {
    const response = await api.post("/authenticate", {
      username,
      password,
      rememberMe: false
    });

    if (response && response.status === 200 && response.data.id_token) {
      dispatch({
        type: AUTH_SIGN_IN_SUCCESS, // <<-- reducer will put received auth data to state and set state.auth.loading = false
        payload: { id_token: response.data.id_token, username }
      });
    } else {
      const errorSignIn2 = `Sing in failed for user: ${username}. Response status: ${
        response ? response.status : null
      }`;
      dispatch({
        type: AUTH_SIGN_IN_FAILURE, // <<-- reducer will put received error to state and set state.auth.loading = false
        payload: { errorSignIn: errorSignIn2 }
      });
    }
  } catch (e) {
    const errorSignIn = `Sing in failed for user: ${username}. Response status: ${e.response.status}`;
    dispatch({
      type: AUTH_SIGN_IN_FAILURE, // <<-- reducer will put received error to state and set state.auth.loading = false
      payload: { errorSignIn: errorSignIn }
    });
  }
};

//
// ACTION CREATOR authLoading
//
export const authLoading = loading => ({ type: AUTH_SET_LOADING, payload: loading }); // <<-- reducer will set state.auth.loading = actio.payload
