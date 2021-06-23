import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
      <Route exact path="/" component={App} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
      </Switch>
    </React.StrictMode>
    <Footer />
  </Router>
)
ReactDOM.render(
 routing,
  document.getElementById('root')
);

reportWebVitals();
