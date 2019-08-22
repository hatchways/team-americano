// ==============================================
// Backend API:
// ==============================================

// Dependencies:
import axios from 'axios';

// Export Axios Base Instance:
export default axios.create({
  baseURL: process.env.PUBLIC_URL || "http://localhost:3001"
});
