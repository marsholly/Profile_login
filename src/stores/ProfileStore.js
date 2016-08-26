import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import UserActions from '../actions/UserActions'
import Constants from '../Constants'

let _profiles = null;

class ProfileStore extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECEIVE_PROFILES:
        _profiles = action.profiles
        this.emit('Change')
        break;
      }
    });

  }
  startListening(cb){
    this.on('Change', cb)
  }
  stopListening(cb){
    this.removeListener('Change', cb)
  }
  getAll(){
    return _profiles
  }
}

export default new ProfileStore();
