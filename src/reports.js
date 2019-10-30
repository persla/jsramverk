import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom'
import ReportAdd from './reportAdd.js';
import ReportRev from './reportRev.js';
import reports from './models/reports.js';
// import {Redirect} from 'react-router-dom';
// const axios = require('axios');


// function getRep(){
//   fetch(`http://localhost:1337/reports`)
//    .then(function(response) {
//      return response.json();
//    })
//    .then(function(json) {
//     //  console.log(json);
//      let data = json.data;
//      console.log(data);
//      return data;
//    });
//  };
//  reports.getReport();
//  console.log(reports.currentReports);

//  getRep();
//  function Welcome(props) {
//   return <h1>Hello, {props.name} </h1>;
// }
// let match = 0;
// function ActionLink(props) {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//     return  <Redirect  to="/" />

//   }

//   return (
//     <a href="reports/"onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// reports.getUsers();
// console.log(reports.allReports);
// const topics = [
//   {
//     name: 'Vecka 1',
//     id: 1,
//     description: <h3>Redovisningstexten för kmom01</h3>,
//     texten:
//     <div>
//     <h4>Install modules</h4>
//     <p>In order to be able to install modules in react, you must first initialize npm in
//     the project directory (npm init), then install the modules using npm install
//     (npm install  --save PACKAGENAME), you have to npm install  --save react-dom.
//     Then you have to import them into the framework. You will be able access it in your files
//     with the code "import ReactDOM from 'react-dom'"</p>

//     <h4>Available Scripts</h4>
//     <p>In the project directory, you can run: `npm start`</p>
//     <p>That runs the app in the development mode.</p>
//     <p>Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>
//     <p>The page will reload if you make edits.
//     You will also see any lint errors in the console.</p>
//     </div> ,
//     url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
//   },
//   {
//     name: 'Vecka 2',
//     id: 2,
//     description: <h3>Redovisningstexten för kmom02</h3>,
//     texten: <div><p>Inspirationen jag har haft för att skapa registreringsformuläret
//     är en enkel och tydlig design likt gmails inloggnings registrering. Därefter har
//     eftersträvat att följa de riktlinjer som presenteras på “A Checklist for
//     Registration and Login Forms on Mobile”.</p>

//     <p>I inledningen förklarar nyttan av att registrera sig. Därefter eftersträvade
//     jag minimal information från användaren enligt kraven, emellertid fick jag göra
//     ett avsteg från rekommendationen att inte uppmana användarna att uppge födelsedatum
//     eftersom det fanns med i kravspecifikationen för kursmomentet. Därefter förklarade
//     jag kraven för input fälten namn och password för att tydliggöra för användaren
//     vad som krävs så att användaren inte ska behöva gissa och använda trial and
//     error. För password fältet möjliggjorde jag även visibilitet genom en togglad
//     checkbox, eftersom kravet på lösenordets konstruktion var medelstarkt så ansåg
//     jag att den funktionalitet krävdes. Inga av input fälten återupprepas eftersom
//     det krävs mycket från användaren på mobiler att återupprepa procedurer, vilket
//     gör att sannolikheten att registreringen inte kommer att bli av ökar. </p>
//     <p>Jag har även inkluderat ett godkännande från användaren för hur applikationen
//     kommer att hantera användardata, som krävs för att submitknappen ska bli
//     enabled. Valideringen av de olika formulärfälten är konstruerad i huvudsak
//     utifrån test av regex som har konstruerats och sedermera testas mot användarens
//     input. Valideringsinformation för varje registreringsfält presenteras direkt
//     till användaren under registreringsprocessen och när det validerat markeras
//     det med en checkmark. Är väl medveten om att min date-picker inte är särskilt
//     avancerad, men personligen uppskattar jag tydlighet och enkelheten som liknar
//     typen som används av G-mail för registrering.
//     </p>
//     </div>,
//     url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
//   },
//   {
//     name: 'Vecka 3',
//     id: 3,
//     description: <h3>Redovisningstexten för kmom03</h3>,
//     texten: <div><p>här kommer massa texten från</p>
//     <p>här kommer massa texten från</p></div>,
//     url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
//   }
// ]


function Topic ({ match }) {
  reports.getReport();
  // console.log(reports.currentReports)
  const topic = reports.currentReports.find(({ id }) => id.toString() === match.params.topicId)
  // console.log(match.params.topicId)

  return (
    <div className = "articel">
      {/* <ActionLink/>
      <Welcome name = {match.params.topicId} />; */}
      <p>Vecka: {topic.name}</p>
      <Link to={`/reports/rev/${match.params.topicId}`}>&#128393; Redigera</Link>
      <h3>{topic.description}</h3>
      <p>{topic.texten}</p>
      {/* <p>{topic.id}</p> */}
      <a href="https://github.com/persla/jsramverk">Repo on github</a>
    </div>
  )
}


function Topics ({ match }) {
  reports.getReport();
    // console.log(reports.currentReports)
  return (
    <div>
      <h2>Veckorapporter</h2>
      <nav>
      <ul>
        {reports.currentReports.map(({ name, id }) => (
          <li key={id}>
            <NavLink to={`${match.url}/${id}`} activeClassName="active">v.{name}</NavLink>
          </li>
        ))}
      </ul>
      </nav>
      <Route path={`${match.path}/:topicId`} component={Topic}/>
    </div>
  )
}

class Reports extends Component {

  render() {
    return (
      <Router>
      <nav>
          <ul>
          <li><NavLink
          to="/reports/week" activeClassName="active">Veckor</NavLink></li>
          <li><NavLink
           to="/reports/add" activeClassName="active">Ny rapport</NavLink></li>
          </ul>
          </nav>
          <Route path='/reports/week' component={Topics} />
          <Route path='/reports/add' component={ReportAdd} />
          <Route path='/reports/rev/:id' component={ReportRev} />
      </Router>

    )
  }
}

export default Reports
