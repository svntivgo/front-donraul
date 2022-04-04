import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { signup } from "../helpers/auth";

function Registrar({ authHandle, auth }) {
  let navigate = useNavigate();

  async function submitHandle(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (password.length >= 6) {
      await signup(email, password);
      navigate("/login");
      return;
    }
    alert("la contraseña debe ser mayor a 6 caracteres");
  }

  if (auth) return <Navigate to="/"></Navigate>;

  return (
    <section
      class="vh-100"
      style={{ height: "100vh", backgroundColor: "#508bfc" }}
    >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <form className="login__formulario" onSubmit={submitHandle}>
                  <div className="form-outline mb-4">
                    <input
                      className="login__email form-control"
                      required
                      name="email"
                      id="email"
                      type={"email"}
                      placeholder="correo electrónico"
                    ></input>
                    <label className="form-label" for="email"></label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      className="login__password form-control"
                      required
                      name="password"
                      id="password"
                      type={"password"}
                      placeholder="contraseña"
                    ></input>
                    <label class="form-label" for="password"></label>
                  </div>
                  <button
                    className="login__boton iniciar-sesion btn btn-primary btn-block mb-4"
                    type="submit"
                  >
                    Registrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registrar;
