import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../global-state/context/auth/authContext";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { state } = useAuthContext();

  if (!state.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
