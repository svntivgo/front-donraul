import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuth } from "../actions/actions";
function Login({ authHandle, auth }) {
  async function submitHandle(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await authHandle({ email: email, password: password });
  }

  if (auth) return <Navigate to="/"></Navigate>;

  return (
    <div>
      <h3>Inicio de sesión</h3>
      <form onSubmit={submitHandle}>
        <input name="email" id="email" type={"email"}></input>
        <input name="password" id="password" type={"password"}></input>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button>Iniciar sesión con Gmail</button>
      <button>Registrarse</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  authHandle(auth) {
    setAuth(auth, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
