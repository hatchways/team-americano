// ==============================================
// API call for Invitation:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { authHeader, handleResponse, getData } from "../helpers";

// Invitation Service:
export const invitationService = {
  getAll,
  respondToInvitation,
  createInvitation
}

async function getAll() {
  return await getData("/api/invitation");
}

async function respondToInvitation(id, status) {
  try {
    const response = await api.put(`/api/invitation/${id}/${status}`, {}, {
      headers: authHeader
    });
    handleResponse(response);
  } catch(e) {
    console.log(e);
  }
}

async function createInvitation(id) {
  try {
    const response = await api.post(`/api/invitation/${id}`, {}, {
      headers: authHeader
    });
    handleResponse(response);
  } catch(e) {
    console.log(e);
  }
}
