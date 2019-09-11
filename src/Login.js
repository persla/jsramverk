// import React, { Component } from 'react';

import React from 'react'
class Login extends React.Component {
    render() {
        return (
            <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Registrering</h2>
              <form onSubmit={this.handleSubmit} noValidate >
                <div className='fullName'>
                  <label htmlFor="fullName">Namn</label>
                  <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                </div>
                <div className='email'>
                  <label htmlFor="email">Email</label>
                  <input type='email' name='email' onChange={this.handleChange} noValidate />
                </div>
                <div className='email'>
                  <label htmlFor="email">Datum</label>
                  <input type='date' name='email' onChange={this.handleChange} noValidate />
                  <div className='info'>
                    <small>Välj ett datum som är som är...</small>
                  </div>
                </div>
                <div className='password'>
                  <label htmlFor="password">Lösenord</label>
                  <input type='password' name='password' onChange={this.handleChange} noValidate />
                  <div className='info'>
                    <small>Lösenordet måste vara minst 8 tecken.</small>
                  </div>
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
