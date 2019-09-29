// import React, { Component } from 'react';

import React from 'react';
import {Redirect} from 'react-router-dom';
import auth from "./models/auth.js";

class Login extends React.Component {
    render() {
        return (
            <Register />
        );
    }
}

const validEmailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const validPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
        );
    return valid;
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            showPassword: null,
            formValidation: null,
            isGoing: false,
            isOk: false,
            errors: {
                email: '',
                password: '',
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'email':
      errors.email =
        validEmailRegex.test(value)
          ? ''
          : 'E-post inte giltig än!';
      break;
    case 'password':
      errors.password =
        validPasswordRegex.test(value)
          ? ''
          : 'Lösenordet inte giltigt än!';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value});
}


handleSubmit = (event) => {
  event.preventDefault();
  if(validateForm(this.state.errors) && this.state.fullName !== null) {
      this.setState({formValidation: 'Giltigt registreringsformulär!'});
      auth.login(this.state.email, this.state.password);
      return  <Redirect  to="/reports" />
  }else{
     this.setState({formValidation: 'Ogiltigt registreringsformulär!'});
  }

}

render() {
  const {errors} = this.state;
  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Inloggning</h2>
        <form onSubmit={this.handleSubmit} noValidate>

          <div className='email'>
            <label htmlFor="email">E-post {errors.email.length > 0 &&
              <span className='error'>{errors.email}</span>}
              {this.state.email !== null && errors.email.length === 0 ?
                  <span className='valid'>&#10004;</span> :
              ''}</label>
            <input type='email' name='email'  required onChange={this.handleChange} noValidate />

              </div>

          <div className='password'>
            <label htmlFor="password">Lösenord
            <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
            <span className='info'>Visa/Dölj! </span>{errors.password.length > 0 &&
              <span className='error'>{errors.password}</span>}
              {this.state.password !== null && errors.password.length === 0 ?
                  <span className='valid'>&#10004;</span> :
              ''} </label>
            {this.state.isGoing === false ?
                <input type='password' name='password'  required onChange={this.handleChange} noValidate />
                :
                <input type='text' name='password'  required onChange={this.handleChange} />
            }
              </div>


                  <div className='submit'>
                       <button onClick={this.handleSubmit}>Logga in</button>
                     </div>
        </form>
      </div>
    </div>
  );
}
}
export default Login
