import React from "react";
import { Card, Button } from "./context/AuthForms";
import { useAuth } from "./context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();
  console.log(useAuth())

  function logOut() {
    setAuthTokens();
    console.log(setAuthTokens())
  }

  return (
    <Card>

      <div>Logga ut från appen</div>
      <Button onClick={logOut}>Logga ut</Button>
      </Card>
  );
}

export default Admin;
