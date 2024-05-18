import React, { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

export function FooterComponent() {
  const authContext = useContext(AuthContext);

  console.log(authContext.number);

  return (
    <footer className="footer">
      <div className="container">Your Footer</div>
    </footer>
  );
}
