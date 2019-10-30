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



// import React from 'react';
// import { Link } from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
// import auth from "./models/auth.js";
// // const axios = require('axios');

// class Login extends React.Component {
//     render() {
//         return (
//             <Register />
//         );
//     }
// }

// const validEmailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
// const validPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

// const validateForm = (errors) => {
//     let valid = true;
//     Object.values(errors).forEach(
//         (val) => val.length > 0 && (valid = false)
//         );
//     return valid;
// }

// class Register extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: null,
//             password: null,
//             showPassword: null,
//             formValidation: null,
//             token: null,
//             isGoing: false,
//             isOk: false,
//             errors: {
//                 email: '',
//                 password: '',
//             }
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//           [name]: value
//         });
//       }

// handleChange = (event) => {
//   event.preventDefault();
//   const { name, value } = event.target;
//   let errors = this.state.errors;

//   switch (name) {
//     case 'email':
//       errors.email =
//         validEmailRegex.test(value)
//           ? ''
//           : 'E-post inte giltig än!';
//       break;
//     case 'password':
//       errors.password =
//         validPasswordRegex.test(value)
//           ? ''
//           : 'Lösenordet inte giltigt än!';
//       break;
//     default:
//       break;
//   }

//   this.setState({errors, [name]: value});
// }


// handleSubmit = (event) => {
//   event.preventDefault();
//   if(validateForm(this.state.errors) && this.state.fullName !== null) {
//       this.setState({formValidation: 'Giltigt registreringsformulär!'});
//       // auth.login(this.state.email, this.state.password);
//       // return  <Redirect  to="/reports" />
//       const serverport = {
//         email: this.state.email,
//         password: this.state.password,
//         api_key: "e2386b9513c75723e61b80bd23d427d1"
//     }

//     axios.post('http://localhost:1337/login', serverport)
//     .then(response => {
//       this.setState({
//         token: response.data.data.token
//       });
//     });

//     this.setState({
//       email: '',
//       password: '',
//     });

//   }else{
//      this.setState({formValidation: 'Ogiltigt registreringsformulär!'});
//   }

// }
// render() {
//   console.log(this.state.token)
//   const {errors} = this.state;
//   return (
//     <div className='wrapper'>
//       <div className='form-wrapper'>
//         <h2>Inloggning</h2>
//         <form onSubmit={this.handleSubmit} noValidate>

//           <div className='email'>
//             <label htmlFor="email">E-post {errors.email.length > 0 &&
//               <span className='error'>{errors.email}</span>}
//               {this.state.email !== null && errors.email.length === 0 ?
//                   <span className='valid'>&#10004;</span> :
//               ''}</label>
//             <input type='email' name='email'  required onChange={this.handleChange} noValidate />

//               </div>

//           <div className='password'>
//             <label htmlFor="password">Lösenord
//             <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//             <span className='info'>Visa/Dölj! </span>{errors.password.length > 0 &&
//               <span className='error'>{errors.password}</span>}
//               {this.state.password !== null && errors.password.length === 0 ?
//                   <span className='valid'>&#10004;</span> :
//               ''} </label>
//             {this.state.isGoing === false ?
//                 <input type='password' name='password'  required onChange={this.handleChange} noValidate />
//                 :
//                 <input type='text' name='password'  required onChange={this.handleChange} />
//             }
//               </div>


//                   <div className='submit'>
//                        <button onClick={this.handleSubmit}>Logga in</button>
//                      </div>
//                      <Link to="/Register" style={{color: 'blue'}}>Registrering</Link>
//         </form>


//       </div>
//     </div>
//   );
// }
// }
// export default Login
