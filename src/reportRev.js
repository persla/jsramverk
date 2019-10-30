import React from 'react';
import reports from "./models/reports.js";
import { Redirect } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom'
// import Login from './Login.js';

// class ReportRev extends React.Component {
//     render() {
//         let userId = this.props.match.params.id;
//         console.log(userId);
//         return (
//             <Addsreports />
//         );
//     }
// }

class ReportRev  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: '',
            description: '',
            texten: '',
            weekStart: 5,
            descriptionStart: '',
            textenStart: '',
            reportSended: null,
            id: this.props.match.params.id
        };
        this.handleChange = this.handleChange.bind(this);

        const topic = reports.currentReports.find(({ id }) => id.toString() === this.state.id)
        console.log(topic.name)
        this.defaultWeek = topic.name;
        this.defaultDescription = topic.description;
        this.defaultTexten = topic.texten;
    }


handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  this.setState({[name]: value});
}



handleSubmit = (event) => {
  event.preventDefault();
  // console.log(this.state.description)
  // console.log(this.state.description ? this.state.description : this.defaultDescription)
  // console.log(this.state.description.length)
  // console.log(this.defaultDescription)
  //  console.log(this.defaultDescription.length)
  //   console.log(this.state.texten)
    reports.revReport(this.state.week ? this.state.week : this.defaultWeek,
    this.state.description ? this.state.description : this.defaultDescription,
    this.state.texten ? this.state.texten : this.defaultTexten, this.state.id );
      // this.setState({reportSended: "sended"});
    //   return  <Redirect  to="/reports" />
    // auth.login();
    // console.log(auth.token);
}

// function ({ match }) {
//   reports.getReport();
//   // console.log(reports.currentReports)
//   const topic = reports.currentReports.find(({ id }) => id.toString() === match.this.state.id)
//   console.log(topic)
//
//   return (
//     <div className = "articel">
//       <p>Vecka: {topic.name}</p>
//       <h3>{topic.description}</h3>
//       <p>{topic.texten}</p>
//       <a href="https://github.com/persla/jsramverk">Repo on github</a>
//     </div>
//
//   )

// }

render() {
  // console.log(<Login/>)
  // console.log(reports.res.data.message);
  if (this.state.reportSended) {
    return <Redirect to="/reports/week" />;
  }
// console.log(window.location.pathname);
// console.log(this.state.id)
// const topic = reports.currentReports.find(({ id }) => id.toString() === this.state.id)
// console.log(topic.name)
// this.setState({weekStart: topic.name});
// weekStart: '',
// descriptionStart: '',
// textenStart: '',


  return (

    <div>


        <h3>Rapport revidering </h3>
        <form onSubmit={this.handleSubmit} >

          <div className='email'>
            <p>Vecka
            {this.state.week.length !== 0?
                 <span className='inforeport'>  - Reviderad </span>  :
              ''} </p>
            <input type='number' name='week' value={this.state.week || this.defaultWeek} onChange={this.handleChange} required/>

              </div>

              <div className='email'>
              <p>Rubrik
            {this.state.description.length !== 0 ?
                 <span className='inforeport'>  - Reviderad </span> :
              ''} </p>
            <input type='text' name='description' value= {
                          this.state.description || this.defaultDescription
                      }   onChange={this.handleChange}  />


              </div>
              <div className='email'>
              <p>Texten
            {this.state.texten.length !== 0 ?
                 <span className='inforeport'>  - Reviderad </span>  :
              ''} </p>
            <textarea name='texten' value={this.state.texten || this.defaultTexten} onChange={this.handleChange} />
              </div>

              {this.state.texten.length !== 0 || this.state.description.length !== 0 || this.state.week.length !== 0
                  ?
                    <div className='submit'>
                       <button onClick={this.handleSubmit}>Revidera</button>
                     </div> :
                     <div className='submit'>
                        <button disabled>Revidera</button>
                      </div>
                }

        </form>

    </div>
  );
}
}

export default ReportRev;
