import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

class App extends Component {
  render() {
    return (
      
 <!-- Dropdown Structure -->
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a href="#!">three</a></li>
  </ul>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <!-- Dropdown Trigger -->
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
    </div>
  </nav>
    );
  }
}
  /*constructor(...props) { // spread operator
    super(...props);

    this.state = {
      courses: [
        {id: 1, name: 'Admins'},
        {id: 2, name: 'Employees'}
      ]
    }
  }

  render() { // sólo debe retornar un nodo hijo
    return(
      <Header 
        courses={this.state.courses} 
      /> 
      // se le pasa la propiedad "courses" del estado
    ) 
  }
}*/

App.propTypes = {}
App.defaultProps = {}

export default App