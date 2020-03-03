import axios from "axios";

const url = 'http://localhost:5000/users/';

class AuthService {

    //check if username is in DB
    static isExistingUser(username) {
        return axios.get(`${url}${username}`);
    }

    static login(username, password) {
        axios.post('http://localhost:5000/api/auth/login', { username, password })
            .then(res => {
                const token = res.data.token.accessToken;
                if (token) {
                    return token;
                }
            });
    }

    // Create user
    static register(username, name, password) {
        axios.post('http://localhost:5000/api/auth/register', { username, name, password })
            .then(res => {
                return res.status;
            });
    }

    // Spotify
    static spotifyLogin() {
        return axios.get(`${url}/spotify`)
    }
    
}

export default AuthService;