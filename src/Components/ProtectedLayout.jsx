import React from "react";
import { useAuth } from "../Context/AuthContext/useAuth";

function ProtectedLayout({ children }) {
  const auth = useAuth()
  if (!auth.email) {
    return (
      <h1>You don't have acess</h1>
    )
  }

  return children
}

export default ProtectedLayout;