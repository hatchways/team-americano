// ==============================================
// Authentication File:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { handleResponse, authHeader } from "../helpers";

// Authentication Service:
class Authentication {
  constructor() {

    if (localStorage.getItem("currentUser")) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

  async login(email, password) {
    try {
      const response = await api.post("/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      this.authenticated = true;

      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  async register(email, name, password, language) {
    try {
      const response = await api.post("/api/auth/register", {
        email,
        password,
        name,
        language
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      this.authenticated = true;

      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  async logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");

    this.authenticated = false;
  }

  async getAuthentication() {
    try {
      const response = await api.get("/api/auth", {
        headers: authHeader
      });
      const data = handleResponse(response);

      localStorage.setItem("currentUser", JSON.stringify(data.data));
      this.authenticated = true;
    } catch(e) {
      this.authenticated = false;
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
    }
  }

}

// Singleton pattern,
// Export Authentication:
export const authenticationService = new Authentication();
