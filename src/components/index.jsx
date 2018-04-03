import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
// import '../App.css';
import 'materialize-css/dist/css/materialize.min.css';
import mui from 'material-ui';
import UserForm from './UserForm'
import RunaHeader from './Header'
import { Route, BrowserRouter as Router, Link, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <RunaHeader />
        <UserForm />
      </div>
    );
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App