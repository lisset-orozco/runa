import React from 'react'
import RunaLogo from './media/runa-logo.png'

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
