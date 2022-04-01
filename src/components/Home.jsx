import React from 'react'
import { connect } from 'react-redux'
import { setAuth } from '../actions/actions'
import { signin, signup } from '../helpers/auth'

const Home = ({auth, authHandle}) => {

  function submitHandle (event) {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    signup(email, password)
    authHandle(auth)
  }

  return (
    <>
      <h1>Don Raúl</h1>
      <h2>Aministrador de inventarios y facturación</h2>
      <h3>Inicio de sesión</h3>
      <form onSubmit={submitHandle}>
        <input required name='email' id='email' type={"email"}></input>
        <input required name='password' id='password' type={"password"}></input>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button>Iniciar sesión con Gmail</button>
      <button>Registrarse</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  authHandle(auth) {
    setAuth(auth, dispatch)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
