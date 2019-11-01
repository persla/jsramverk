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
