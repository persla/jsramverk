import React, { useEffect, useState } from 'react';
import reports from "./models/reports.js";
import auth from "./models/auth.js";

class ReportAdd extends React.Component {
    render() {
        return (
            <Register />
        );
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: '',
            description: '',
            texten: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
 
handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  this.setState({[name]: value});
}


handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.week)
  console.log(this.state.description)
    console.log(this.state.texten)
      reports.addReport(this.state.week, this.state.description, this.state.texten);
    //   return  <Redirect  to="/reports" />
    // auth.login();
    // console.log(auth.token);
}

render() {
 
  return (
    <div>
 
 
        <h3>Rapport</h3>
        <form onSubmit={this.handleSubmit} >

          <div className='email'>
            <p>Vecka
            {this.state.week.length === 0 ?
                 <span className='inforeport'>  - Obligatorisk fält </span>  :
              <span className='valid'>&#10004;</span>} </p>
            <input type='number' name='week' onChange={this.handleChange} required/>
           
              </div>
   
              <div className='email'>
              <p>Rubrik
            {this.state.description.length === 0 ?
                 <span className='inforeport'>  - Obligatorisk fält </span>  :
              <span className='valid'>&#10004;</span>} </p>
            <input type='text' name='description'  required="required" onChange={this.handleChange}  />
              </div>
              <div className='email'>
              <p>Texten
            {this.state.texten.length === 0 ?
                 <span className='inforeport'>  - Obligatorisk fält </span>  :
              <span className='valid'>&#10004;</span>} </p>
            <textarea name='texten' required="required" onChange={this.handleChange} />
              </div>

              {this.state.texten.length !== 0 && this.state.description.length !== 0 && this.state.week.length !== 0 ?
                    <div className='submit'>
                       <button onClick={this.handleSubmit}>Registrera</button>
                     </div> :
                     <div className='submit'>
                        <button disabled>Registrera</button>
                      </div>
                }

        </form>

    </div>
  );
}
}

export default ReportAdd;
