// ==============================================
// User API call file:
// ==============================================

// Helpers:
import { getData } from "../helpers";

// User Service:
export const userService = {
  getAll,
  getConversations
}

async function getAll(query="", limit=5) {
  return await getData(`/api/user?q=${query}&limit=${limit}`);
}

async function getConversations(query="") {
  return await getData(`/api/conversation?q=${query}`);
}
