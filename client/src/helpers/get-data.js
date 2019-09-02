// ==============================================
// Get Data Helper:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { authHeader, handleResponse } from "."

// Export Function:
export const getData = async (endpoint) => {
  const response = await api.get(endpoint, {
    headers: authHeader
  });
  const data = handleResponse(response);

  return data.data;
}
