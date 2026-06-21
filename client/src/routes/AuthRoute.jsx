import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return children;
};

export default AuthRoute;