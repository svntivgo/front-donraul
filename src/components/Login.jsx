import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setAuth } from "../actions/actions";
function Login({ authHandle, auth }) {
  async function submitHandle(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await authHandle({ email: email, password: password });
  }

  let navigate = useNavigate()

  if (auth) return <Navigate to="/"></Navigate>;

  return (
    <div>
      <h3>Inicio de sesión</h3>
      <form onSubmit={submitHandle}>
        <input
          name="email"
          id="email"
          type={"email"}
          placeholder="ejemplo@ejemplo.com"
        ></input>
        <input
          name="password"
          id="password"
          type={"password"}
          placeholder="*******"
        ></input>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button>Iniciar sesión con Gmail</button>
      <button onClick={() => navigate("/registrar")}>Registrarse</button>
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
