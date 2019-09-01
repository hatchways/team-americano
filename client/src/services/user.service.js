// ==============================================
// User API call file:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { handleResponse, authHeader } from "../helpers";

// User Service:
export const userService = {
  getAll,
  getConversations,
  getInvitations
}

function getAll(query="", limit=5) {
  return api.get(`/api/user?q=${query}&limit=${limit}`, {
    headers: authHeader
  })
  .then(handleResponse)
  .then(data => data);
}

function getConversations(query="") {
  return api.get(`/api/conversation?q=${query}`, {
    headers: authHeader
  })
  .then(handleResponse)
  .then(data => data)
}

function getInvitations() {
  return api.get("/api/invitation", {
    headers: authHeader
  })
  .then(handleResponse)
  .then(data => data)
}
