// ==============================================
// Conversation API call File:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { getData, authHeader, handleResponse } from "../helpers";

// Conversation Service:
export const conversationService = {
  getAll,
  create
}

async function getAll(query="") {
  return await getData(`/api/conversation?q=${query}`);
}

async function create(...users) {
  try {
    const response = await api.post("/api/conversation", { users }, {
      headers: authHeader
    });

    const data = handleResponse(response);
    return data.data;
  } catch(e) {
    console.log(e);
  }
}
