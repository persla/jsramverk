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
    description: <h4>Redovisningstexten för kmom01</h4>,
    text: <div><p>här kommer massa text från</p>
    <p>här kommer massa text från</p></div> ,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  },
  {
    name: 'Vecka 2',
    id: '2',
    description: <h4>Redovisningstexten för kmom02</h4>,
    text: <div><p>här kommer massa text från</p>
    <p>här kommer massa text från</p></div>,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  },
  {
    name: 'Vecka 3',
    id: '3',
    description: <h4>Redovisningstexten för kmom03</h4>,
    text: <div><p>här kommer massa text från</p>
    <p>här kommer massa text från</p></div>,
    url:  <a href="https://github.com/persla/jsramverk">Repo on github</a> ,
  }
]

function Topic ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <p>{topic.text}</p>
      <p>{topic.url}</p>
      <hr />
    </div>
  )
}

function Topics ({ match }) {
  return (
    <div>
      <h1>Rapporter</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic}/>
    </div>
  )
}

class Reports extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>

            <li><Link style={{color: 'black', 'font-size': '2em', 'text-decoration': 'none' }}
            to='/reports/week'>Vecka</Link></li>
          </ul>
          <hr/>

          <Route path='/reports/week' component={Topics} />
        </div>
      </Router>
    )
  }
}

export default Reports
