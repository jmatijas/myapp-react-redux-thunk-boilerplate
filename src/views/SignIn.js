import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn, authLoading } from "../actions/auth";

const SignIn = () => {
  const dispatch = useDispatch();

  const id_token = useSelector(state => state.auth.id_token);
  const username = useSelector(state => state.auth.username);
  const errorSignIn = useSelector(state => state.auth.errorSignIn);
  const loading = useSelector(state => state.auth.loading);

  return (
    <div>
      <h4>SignIn</h4>
      <hr />
      <p>
        username: admin
        <br />
        password: admin
      </p>
      <button onClick={() => dispatch(authSignIn("admin", "admin"))}>
        Sing in OK
      </button>
      <hr />
      <p>
        username: admin
        <br />
        password: wrong
      </p>
      <button onClick={() => dispatch(authSignIn("admin", "wrong"))}>
        Sing in NOK
      </button>
      <hr />
      <p>
        STATE:
        <br />
        id_token: {id_token}
        <br />
        username: {username}
        <br />
        errorSignIn: {errorSignIn}
        <br />
        loading: {loading ? "true" : "false"}
        <br />
      </p>
    </div>
  );
};

export default SignIn;
