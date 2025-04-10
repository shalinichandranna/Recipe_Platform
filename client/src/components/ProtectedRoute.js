// components/ProtectedRoute.js
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);

  if (!cookies.access_token) {
    return <Navigate to="/auth" />;
  }

  return children;
};
