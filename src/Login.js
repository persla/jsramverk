// import React, { Component } from 'react';

import React from 'react'
class Login extends React.Component {
    render() {
  return (
    <Register />
  );
}
}

const validEmailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const validDateRegex = RegExp(/(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])/g);
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
    fullName: null,
    email: null,
    password: null,
    date: null,
    datum: new Date().getDate(),
    errors: {
      fullName: '',
      email: '',
      password: '',
      date: '',
    }
  };
}

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'fullName':
      errors.fullName =
        value.length < 5
          ? 'För- och efternamn måste vara på minst 5 tecken'
          : '';
      break;
    case 'email':
      errors.email =
        validEmailRegex.test(value)
          ? ''
          : 'Denna e-post är inte giltig än!';

      break;
      case 'date':
        errors.date =
          validDateRegex.test(value)
            ? ''
            : 'Denna datum är inte än giltig! Format: åååå-mm-dd';
        break;
    case 'password':
      errors.password =
        validPasswordRegex.test(value)
          ? ''
          : 'Lösenordet måste vara på minst 8 tecken samt innehålla minst en siffra, en stor bokstav, en liten bokstav och ett av fäljande specialtecken !@#$%^&*';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value});
}

handleSubmit = (event) => {
  event.preventDefault();
  if(validateForm(this.state.errors)) {
    console.info('Valid Form')
  }else{
    console.error('Invalid Form')
  }
}

render() {
  const {errors} = this.state;
  console.log(this.state.errors)

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Skapa användare</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='fullName'>
            <label htmlFor="fullName">För- och efternamn</label>
            <input type='text' name='fullName' required onChange={this.handleChange} noValidate />
            {errors.fullName.length > 0 &&
              <span className='error'>{errors.fullName}</span>}
            {this.state.fullName !== null && this.state.fullName.length > 4 ?
                <span className='valid'>Giltigt namn!</span> :
            ''}

          </div>
          <div className='email'>
            <label htmlFor="email">E-post</label>
            <input type='email' name='email' required onChange={this.handleChange} noValidate />
            {errors.email.length > 0 &&
              <span className='error'>{errors.email}</span>}
              {this.state.email !== null && errors.email.length === 0 ?
                  <span className='valid'>Giltig E-post!</span> :
              ''}

          </div>
          <div className='date'>
            <label htmlFor="date">Datum</label>
            <input type='text'  name='date' placeholder="åååå-mm-dd" required onChange={this.handleChange} noValidate />
            {errors.date.length > 0 &&
              <span className='error'>{errors.date}</span>}
              {this.state.date !== null && errors.date.length === 0 ?
                  <span className='valid'>Giltigt datum!</span> :
              ''}
          </div>
          <div className='password'>
            <label htmlFor="password">Lösenord</label>
            <input type='password' name='password' required onChange={this.handleChange} noValidate />
            {errors.password.length > 0 &&
              <span className='error'>{errors.password}</span>}
              {this.state.password !== null && errors.password.length === 0 ?
                  <span className='valid'>Giltigt lösenord!</span> :
              ''}
          </div>
          <div className='submit'>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
}
export default Login
