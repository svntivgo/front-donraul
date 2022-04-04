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
                    Iniciar Sesión
                  </button>
                </form>
                <div className="text-center">
                  <p>
                    ¿Aun no está registrado?{" "}
                    <a
                      className="login_boton registrarse"
                      onClick={() => navigate("/registrar")}
                      href="/registrar#"
                    >
                      Registrarse
                    </a>
                  </p>
                  <p>o inicia sesión con:</p>
                  <button
                    className="login__boton iniciar-gmail btn btn-link btn-floating mx-1"
                    onClick={() => gmailSigninHandle()}
                  >
                    <i class="fab fa-google"></i>
                  </button>
                  <button
                    className="login__boton iniciar-github btn btn-link btn-floating mx-1"
                    onClick={() => githubSigninHandle()}
                  >
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
