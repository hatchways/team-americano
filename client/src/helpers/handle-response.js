// ==============================================
// Handle Server Codes
// ==============================================

// Services:
import { authenticationService } from "../services";

// Function to handle api response:
export const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        authenticationService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.rejects(error);
    }

    return data;
  });
}
