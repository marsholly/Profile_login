import React, { Component } from 'react';
import  UserActions  from '../actions/UserActions';
import { Modal, Button, FormControl, ControlLabel } from 'react-bootstrap'

export default class ProfileForm extends Component {
  constructor(props){
    super(props);
    let { email, bio, picture } = this.props.profile
    this.state = {
      email: email,
      bio: bio,
      picture: picture
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }
  _onInputChange(e){
    let key = e.target.dataset.statekey;
    let value = e.target.value
    this.setState({[key]: value})
  }
  _submit(e){
    e.preventDefault()
    let newProf = this.state
    UserActions.editProf(newProf)
  }
  render(){
    return(
      <div className="container">
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
      <Modal.Body>
        <form className="form-group" onSubmit={this._addAnimal}>
          <label>E-mail :</label>
          <FormControl onChange={this._onInputChange} value={this.state.email} type="text"  data-statekey='email' required/>
          <label>Photo :</label>
          <FormControl onChange={this._onInputChange} value={this.state.picture} type="text"  data-statekey='picture' />
          <label>Biography :</label>
          <FormControl onChange={this._onInputChange} value={this.state.bio} type="text"  data-statekey='bio' required componentClass='textarea'/>
        </form>
      </Modal.Body>
        <Modal.Footer>
        <Button className="btn btn-success" onClick={this._submit}>Edit</Button>
        <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      </div>
    )
  }
}


// <img src={this.state.pic_url} alt="" className="img-responsive img-rounded center-block"/>






// <span>E-mail: </span><input class="form-control" onChange={this._onInputChange} value={this.state.email} data-statekey='email' required/>
// <span>Picture: </span><input class="form-control" onChange={this._onInputChange} value={this.state.picture} data-statekey='picture'/>
// <span>Biography: </span><textarea class="form-control" rows="6" onChange={this._onInputChange} value={this.state.bio} data-statekey='bio' required></textarea>
