import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Don Raúl</h1>
      <h2>Aministrador de inventarios y facturación</h2>
      <h3>Inicio de sesión</h3>
      <form>
        <input type={"email"}></input>
        <input type={"password"}></input>
        <button>Iniciar Sesión</button>
      </form>
      <button>Iniciar sesión con Gmail</button>
      <button>Registrarse</button>
    </>
  );
}

export default Home
