import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setAuth } from "../actions/actions";
import { signup } from "../helpers/auth";

function Registrar({ authHandle, auth }) {
  let navigate = useNavigate()

  async function submitHandle(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signup(email, password)
    navigate("/login");
  }

  if (auth) return <Navigate to="/"></Navigate>;

  return (
    <div>
      <h3>Registro</h3>
      <form onSubmit={submitHandle}>
        <input required name="email" id="email" type={"email"} placeholder="ejemplo@ejemplo.com"></input>
        <input required min="6" name="password" id="password" type={"password"} placeholder="*******"></input>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registrar
