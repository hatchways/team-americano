// ==============================================
// User API call file:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { handleResponse, authHeader } from "../helpers";

async function getData(endpoint) {
  const response = await api.get(endpoint, {
    headers: authHeader
  });
  const data = handleResponse(response);

  return data.data;
}

// User Service:
export const userService = {
  getAll,
  getConversations,
  getInvitations
}

async function getAll(query="", limit=5) {
  return await getData(`/api/user?q=${query}&limit=${limit}`);
}

async function getConversations(query="") {
  return await getData(`/api/conversation?q=${query}`);
}

async function getInvitations() {
  return await getData("/api/invitation");
}
