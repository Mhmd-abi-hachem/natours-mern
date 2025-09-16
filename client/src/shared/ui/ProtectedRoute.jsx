import React from "react";
import { Navigate } from "react-router-dom";

import Spinner from "./Spinner";
import { useAuthStatus } from "../../features/authentication/useAuthStatus";

function ProtectedRoute({ children }) {
  const { authStatus, isAuthLoading } = useAuthStatus();

  if (isAuthLoading) return <Spinner />;
  if (!authStatus.isLoggedIn) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
