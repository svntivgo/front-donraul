import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}) {

  const data = useSelector((state) => {
    return state;
  });

  if (!data.auth) return <Navigate to="/login"></Navigate>;

  return <>{children}</>;

}
