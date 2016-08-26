import React, { Component } from 'react'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import ProfileForm from './ProfileForm'

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: UserActions.getProfile(),
      showModal:false
    }
    this._onChange = this._onChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
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

  showModal(){
    this.setState({showModal: true})
  }
  closeModal(){
    this.setState({showModal: false})
  }

  render() {
    if(this.state.profile){
      let { username, picture, email, bio } = this.state.profile;
      return (
        <div className="container">
        <button onClick={this.showModal} className='btn btn-default'>Add</button>
          <div className="col-md-3">
            <img className="img-responsive img-rounded center-block" src={picture}/>
          </div>
          <div>
          </div>
          <div className='col-md-9'>
            <div className="alert alert-success" >Username: {username}</div>
            <div className="alert alert-info" >E-mail: {email}</div>
            <div className="alert alert-warning" >Biography: {bio}</div>
          </div>
          <ProfileForm showModal={this.state.showModal} closeModal={this.closeModal} profile={this.state.profile} />
        </div>
      )
    }else{
      return(
        <div class="alert alert-danger" role="alert">Loading...</div>
      )
    }
  }

}
