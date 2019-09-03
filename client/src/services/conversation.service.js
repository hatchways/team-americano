// ==============================================
// Conversation API call File:
// ==============================================

// Helpers:
import { getData } from "../helpers";

// Conversation Service:
export const conversationService = {
  getAll
}

async function getAll(query="") {
  return await getData(`/api/conversation?q=${query}`);
}
