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
    this.authenticated = false;
  }

  async login(email, password) {
    try {
      const response = await api.post("/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("currentUser", response.data.data);
      this.authenticated = true;

      return this.authenticated;
    } catch(e) {
      console.log(e);
      return this.authenticated;
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
      localStorage.setItem("currentUser", response.data.data);
      this.authenticated = true;

      return this.authenticated;
    } catch(e) {
      console.log(e);
      return this.authenticated;
    }
  }

  async logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");

    this.authenticated = false;
  }

  get authentication() {
    return this.authenticated;
  }

  async getAuthentication() {
    try {
      const response = await api.get("/api/auth", {
        headers: authHeader
      });
      const data = await handleResponse(response);

      localStorage.setItem("currentUser", data);
      this.authenticated = true;
    } catch(e) {
      this.authenticated = false;
    }
  }

}

// Singleton pattern,
// Export Authentication:
export const authenticationService = Authentication();
