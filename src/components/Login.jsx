import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { githubSignin, gmailSignin, setAuth } from "../actions/actions";
function Login({ authHandle, gmailSigninHandle, githubSigninHandle, auth }) {
  async function submitHandle(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    password.length >= 6
      ? await authHandle({ email: email, password: password })
      : alert("la contraseña debe ser mayor a 6 caracteres");
  }

  let navigate = useNavigate();

  if (auth) return <Navigate to="/"></Navigate>;

  return (
    <div>
      <h3>Inicio de sesión</h3>
      <form onSubmit={submitHandle}>
        <input
          required
          name="email"
          id="email"
          type={"email"}
          placeholder="ejemplo@ejemplo.com"
        ></input>
        <input
          required
          name="password"
          id="password"
          type={"password"}
          placeholder="*******"
        ></input>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button onClick={() => gmailSigninHandle()}>
        Iniciar sesión con Gmail
      </button>
      <button onClick={() => githubSigninHandle()}>
        Iniciar sesión con GitHub
      </button>
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
  gmailSigninHandle() {
    gmailSignin(dispatch);
  },
  githubSigninHandle() {
    githubSignin(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
