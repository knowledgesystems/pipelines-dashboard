import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import makeRoutes from './routes';
import DashboardNavBar from './components/dashboardNavBar/DashboardNavBar';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
      <Router>
        <div>
          <DashboardNavBar/>
          <hr/>
          {
            makeRoutes()
          }
        </div>
      </Router>
      </Container>
    );
  }
}
export default App;
