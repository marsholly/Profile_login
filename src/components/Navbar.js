import React, { Component } from 'react'
import { Link } from 'react-router'
import UserStore from '../stores/UserStore'
import UserWelcome from './UserWelcome'
import UserActions from '../actions/UserActions'

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      profile: UserStore.get()
    }
    this._onChange = this._onChange.bind(this);
    // this._logout = this._logout.bind(this);
  }

  componentDidMount() {
    UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    UserStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      profile: UserStore.get()
    });
  }


  render() {
    let { profile } = this.state;

    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>Rainbow App</Link>
          </div>

          <UserWelcome profile={profile}/>

        </div>
      </nav>

    )
  }
}
