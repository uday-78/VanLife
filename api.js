

// export async function getVans() {
//   const response = await fetch("/api/vans");

//   // Check if the response is not OK
//   if (!response.ok) {
//     // Parse the response body as JSON
//     const errorData = await response.json();

//     // Log the error for debugging
//     console.error("Error fetching vans:", errorData);

//     // Throw a custom error with details
//     throw {
//       message: errorData.error || "Failed to fetch vans", // Use the server's error message if available
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }

//   // Parse and return the successful response
//   const data = await response.json();
//   return data.vans;
// }

export async function getVans() {
  try {
    const response = await fetch("/api/vans");

    if (!response.ok) {
      // Parse the error response body
      const errorData = await response.json();
      console.error("Server Error Response:", errorData);

      // Throw a custom error object
      throw {
        message: errorData.error || "Failed to fetch vans",
        statusText: response.statusText,
        status: response.status,
      };
    }

    // Parse and return the successful response
    const data = await response.json();
    return data.vans;
  } catch (err) {
    console.error("Fetch Error:", err);
    // Make sure we're throwing an object with a message property
    if (typeof err === 'object' && err.message) {
      throw err;
    } else {
      throw { message: "An unexpected error occurred" };
    }
  }
}