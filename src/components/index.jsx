import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
// import '../App.css';
import 'materialize-css/dist/css/materialize.min.css';
import mui from 'material-ui';
import RunaHeader from './Header'

class App extends Component {
  render() {
    return (
        <div>
          <RunaHeader />
        </div>
    );
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App