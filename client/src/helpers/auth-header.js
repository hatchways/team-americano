// ==============================================
// Auth Header Helper:
// ==============================================

// Export function:
export const authHeader = {
  Authorization: "Bearer " + localStorage.getItem("token")
}
