import axios from 'axios';
const url = 'http://localhost:5000/users/';

class UserService {

  static getUserData(id) {
    return axios.get(`${url}${id}`);
  }

  // Get users
  static getUsers() {
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(url);
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
    return axios.delete(`${url}${id}`);
  }

}

export default UserService;