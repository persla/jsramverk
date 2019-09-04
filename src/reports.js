import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const topics = [
  {
    name: 'Vecka 1',
    id: '1',
    description: <h4>Redovisningstext för kmom01</h4>,
    text: <div>
    <h3>Install modules</h3>
    <p>In order to be able to install modules in react, you must first initialize npm in
    the project directory (npm init), then install the modules using npm install
    (npm install  --save PACKAGENAME), you have to npm install  --save react-dom.
    Then you have to import them into the framework. You will be able access it in your files
    with the code "import ReactDOM from 'react-dom'"</p>

    <h3>Available Scripts</h3>
    <p>In the project directory, you can run: `npm start`</p>
    <p>That runs the app in the development mode.</p>
    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>
    <p>The page will reload if you make edits.
    You will also see any lint errors in the console.</p>
    </div> ,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  },
  {
    name: 'Vecka 2',
    id: '2',
    description: <h3>Redovisningstext för kmom02</h3>,
    text: <div><p>här kommer massa text från</p>
    <p>här kommer massa text från</p></div>,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  },
  {
    name: 'Vecka 3',
    id: '3',
    description: <h4>Redovisningstext för kmom03</h4>,
    text: <div><p>här kommer massa text från</p>
    <p>här kommer massa text från</p></div>,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  }
]

function Topic ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)

  return (
    <div class = "articel">
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <p>{topic.text}</p>
      <p>{topic.url}</p>
    </div>
  )
}

function Topics ({ match }) {
  return (
    <div>
      <h2>Rapporter</h2>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic}/>
    </div>
  )
}

class Reports extends Component {
  render() {
    return (
      <Router>
          <ul>
            <li><Link
            to='/reports/week'>Veckor</Link></li>
          </ul>
          <Route path='/reports/week' component={Topics} />
      </Router>
    )
  }
}

export default Reports
