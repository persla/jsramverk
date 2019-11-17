// import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Me from './Me.js';
import Reports from './reports.js';
import ReportRev from './reportRev.js';
import Loginreg from './Register.js';
import Login from './Login.js';
import Admin from './logout.js';
import Chat from './Chat.js';
// import PrivateRoute from './PrivateRoute';
import  {AuthContext}  from "./context/auth";
import React, { useState } from "react"
import './App.css';

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  // console.log(authTokens);
  // console.log(setAuthTokens);


  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
    // console.log(data);

  }
  const isLoggedIn = authTokens;
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens  }}>

  <Router>


        <div className="App">
        <div className="lock">
        {isLoggedIn ?  <span>&#128275; Öppen</span> :  <span>&#128272; Låst </span>}
        </div>
        <h1>Me-app</h1>

          <nav>
            <ul>
              <li><NavLink exact to="/" activeClassName="active">Me</NavLink></li>
              <li><NavLink to="/reports" activeClassName="active">Rapporter</NavLink></li>
              <li><NavLink to="/Register" activeClassName="active">Registrering</NavLink></li>
              <li><NavLink to="/Login" activeClassName="active">Inloggning</NavLink></li>
              <li><NavLink to="/logout" activeClassName="active">Utloggning</NavLink></li>
              <li><NavLink to="/Chat" activeClassName="active">Chat</NavLink></li>
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          {isLoggedIn ? <Route path="/reports" component={Reports} /> : false}
          {/* <Route path="/reports" component={Reports} /> */}
          {/* <PrivateRoute path="/reports" component={Reports} /> */}
          <Route path="/Register" component={Loginreg} />
          <Route path="/reportRev/:id" component={ReportRev} />
          <Route path="/Login" component={Login} />
          <Route path="/logout" component={Admin} />
          <Route path="/Chat" component={Chat} />
          <footer>Lars Persson 2019</footer>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

// class App extends Component {

//   render() {

//     return (
//       <AuthContext.Provider value={false}>
//       <Router>
//         <div className="App">
//         <h1>Me-app</h1>
//           <nav>
//             <ul>
//               <li><Link to="/">Me</Link></li>
//               <li><Link to="/reports">Rapporter</Link></li>
//               <li><Link to="/Register">Registrering</Link></li>
//               <li><Link to="/Login">Inloggning</Link></li>
//             </ul>
//           </nav>
//           <Route exact path="/" component={Me} />
//           {/* <Route path="/reports" component={Reports} /> */}
//           <PrivateRoute path="/reports" component={Reports} />
//           <Route path="/Register" component={Loginreg} />
//           <Route path="/Login" component={Login} />
//           <footer>Lars Persson 2019</footer>
//         </div>
//       </Router>
//       </AuthContext.Provider>
//     );
//   }
// }

// export default App;
