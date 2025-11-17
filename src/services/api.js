import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function apiFetch(path, data, method = "GET") {
  try {
    const config = {
      url: path,
      method,
      data: ["POST", "PUT", "PATCH", "DELETE"].includes(method)
        ? data
        : undefined,
      params: method === "GET" ? data : undefined, // for GET, treat data as query params
    };

    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      error.response &&
      error.response.data
    ) {
      throw new Error(error.response.data.error || "API request failed");
    } else if (error instanceof Error) {
      throw new Error(error.message || "API request failed");
    } else {
      throw new Error(error || "API request failed");
    }
  }
}
