import { useLocation, Navigate } from "react-router-dom";
import React from "react";

interface RequireAuthProps {
  children: React.ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation(); // Use the useLocation hook here

  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    sessionStorage.clear();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default RequireAuth;
