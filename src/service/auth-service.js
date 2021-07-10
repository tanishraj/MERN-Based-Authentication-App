import axios from "axios";

const API_URL = "http://localhost:4000/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.isAuth === true) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname, lastname, email, password, password2) {
    return axios.post(API_URL + "signup", {
      firstname,
      lastname,
      email,
      password,
      password2,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
