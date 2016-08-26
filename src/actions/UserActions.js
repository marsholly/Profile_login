import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  editProf: API.editProf
};

export default UserActions;
