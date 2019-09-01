// ==============================================
// Handle Response Helper:
// ==============================================

// Services:
import { authenticationService } from "../services";

// Export function:
export const handleResponse = response => {
  if (!response.status === 200 || !response.status === 201) {
    if ([401, 403].includes(response.status)) {
      // Logout User:
      authenticationService.logout();
    }

    throw new Error("Error handling Response.");
  }
  return response.data;
}