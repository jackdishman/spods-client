import axios from 'axios';
import url from "../static/server"

class UserService {

  static getUserData(id) {
    return axios.get(url + `/users/${id}`);
  }

  // Get users
  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + '/users');
        const data = res.data;
        resolve(
          data.map(user => ({
            ...user,
            createdAt: new Date(user.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Delete user
  static deleteUser(id) {
    return axios.delete(url + `/users/${id}`);
  }

}

export default UserService;