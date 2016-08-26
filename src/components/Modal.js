import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(){
    super();
    this.state={
      showModal: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
  }

  closeModal() {
   this.setState({ showModal: false });
  }

  openModal() {
   this.setState({ showModal: true });
  }

  cancelAdd() {
    this.closeModal();
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.submitForm}>
            <Modal.Body>
                <div className="form-group">
                  <label>Name</label>
                  <input type="name" className="form-control" value={this.state.name}  placeholder="Name" onChange={this.onInputNameChange}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <input type="type" className="form-control" value={this.state.type} placeholder="type" onChange={this.onInputTypeChange}/>
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input type="age" className="form-control" value={this.state.age} placeholder="age" onChange={this.onInputAgeChange}/>
                </div>
                <div className="form-group">
                  <label>picture</label>
                  <input type="picture" className="form-control" value={this.state.picture} placeholder="url" onChange={this.onInputPictureChange}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-primary" type='submit'>Save</Button>
              <Button onClick={this.cancelAdd}>Close</Button>
            </Modal.Footer>
        </form>
      </Modal>
    )
  }
}
