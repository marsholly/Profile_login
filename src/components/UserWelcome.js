import React, { Component } from 'react';
import { Link } from 'react-router';
import UserActions from '../actions/UserActions'


export default class UserWelcome extends Component {
  constructor() {
    super();
    this._logout = this._logout.bind(this);
  }

  _logout() {
    UserActions.logout();
  }

  render() {
    let { profile } = this.props;

    if(!profile) {
      return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></li>
          </ul>
        </div>
      )
    }

    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <p className="navbar-text">Welcome {profile.username}!</p>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><a onClick={this._logout} style={{cursor:'pointer'}}>Logout</a></li>
        </ul>
      </div>
    )
  }
}
