// import React, { Component } from 'react';

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { Form, Input, Button, Error } from "./context/AuthForms";
import { useAuth } from "./context/auth";
// import auth from "./models/auth";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  // console.log(isLoggedIn);
  // console.log(setAuthTokens);



  function postLogin() {
    const serverport = {
              email,
              password,
          }
          axios.post('http://localhost:1337/login', serverport)
          .then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data.data.token);
        // console.log(result.data.data.token);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/reports" />;
  }

  return (
    <div className='form-wrapper'>
      <h2>Inloggning</h2>
    {/* <Card> */}

      <Form>

      <div className='email'>
            <label htmlFor="email">E-post </label>
        <Input
          type="email"
          value={email}
          onChange={e => {
            setemail(e.target.value);
          }}
          // placeholder="email"
        />
        </div>
        <div className='email'>
            <label htmlFor="email">Lösenord </label>
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          // placeholder="password"
        />
        </div>
        <Button onClick={postLogin}>Sign In</Button>
      </Form>

      <Link to="/register" style={{color: 'blue', margin: 'auto'}}>Registrering</Link>
        { isError &&<Error>The email or password provided were incorrect!</Error> }
    {/* </Card> */}
    </div>
  );
}

export default Login;
