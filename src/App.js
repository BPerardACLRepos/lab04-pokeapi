import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header.js';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';
import DetailPage from './DetailPage.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
            />
            <Route
              path="/pokemon"
              exact
              component={SearchPage}
            />
            <Route
              path="/pokemon/:pokemon"
              exact
              component={DetailPage}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
