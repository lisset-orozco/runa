import React from 'react'
import RunaLogo from './media/runa-logo.png'
import {Dropdown, Button, Icon, Navbar, NavItem, } from 'react-materialize'

const Header = () => (
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
          <img alt="logo" width="90px" src={RunaLogo}/>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/auth/admins">Admins</a></li>
          <li><a href="/auth/employees">Employees</a></li>
          <li><a href="/auth/registries">Registries</a></li>
          <li><a href="/auth/schedules">Schedule</a></li>
          <li><a href="/auth/working_days">Working days</a></li>
          <li><a className="dropdown-trigger" href="#" data-target="dropdown1">Profile<i className="material-icons right">*</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header

//cd
/*
const Header = ({ navigateTo }) => (

  <div class="nav-wrapper">
    <a href="#" class="brand-logo">
      <img alt="logo" src={RunaLogo}>
    </a>
    <a href="#" data-activates="mobile-demo" class="button-collapse">
      <i class="material-icons">menu</i>
    </a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="/auth/admins">Admins</a></li>
      <li><a href="/auth/employees">Employees</a></li>
      <li><a href="/auth/registries">Registries</a></li>
      <li><a href="/auth/schedules">Schedule</a></li>
      <li><a href="/auth/working_days">Working days</a></li>
      <!-- Dropdown Trigger -->
      <li>
        <a class="dropdown-trigger" href="#!" data-target="dropdown1" data-activates="dropdown1">
          Admin1
          <i class="material-icons right">arrow_drop_down</i>
        </a><ul id="dropdown1" class="dropdown-content">
      <li><a href="/auth/admins/1">Profile</a></li>
      <li class="divider"></li>
      <li><a rel="nofollow" data-method="delete" href="/users/sign_out">Sign-Out</a></li>    
      </ul>
      </li>
    </ul>
    </div>
)
*/