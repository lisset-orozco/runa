import React, {Component} from 'react'
import RunaLogo from './media/runa-logo.png'
import {Dropdown, Button, Icon, Navbar, NavItem, } from 'react-materialize'
import { Route, BrowserRouter as Router, Link, Redirect, Switch} from 'react-router-dom'
import Home from './pages/'
import Admins from './pages/Admins'
import Employees from './pages/Employees'
import Registries from './pages/Registries'
import Schedules from './pages/Schedules'
import WorkingDays from './pages/WorkingDays'


class Header extends Component {
  render() {
    return(
      <Router>
        <div>
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#">one</a></li>
            <li><a href="#">two</a></li>
            <li className="divider"></li>
            <li><a href="#">three</a></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <Link to="/" onClick={this.handleOnClick}>
                  <img alt="logo" width="90px" src={RunaLogo}/>
                </Link>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/admin" onClick={this.handleOnClick}>Admins</Link></li>
                <li><Link to="/employees" onClick={this.handleOnClick}>Employees</Link></li>
                <li><Link to="/registries" onClick={this.handleOnClick}>Registries</Link></li>
                <li><Link to="/schedules" onClick={this.handleOnClick}>Schedules</Link></li>
                <li><Link to="/working_days" onClick={this.handleOnClick}>Working days</Link></li>

                <li><a className="dropdown-trigger" href="#" data-target="dropdown1">Profile<i className="material-icons right">*</i></a></li>
              </ul>
            </div>
          </nav>
          <main className="Main">
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/admin' component={Admins} />
                    <Route path='/employees' component={Employees} />
                    <Route path='/registries' component={Registries} />
                    <Route path='/schedules' component={Schedules} />
                    <Route path='/working_days' component={WorkingDays} />
                  </Switch>
            </main>
        </div>
      </Router>
    )
  }
}

export default Header
