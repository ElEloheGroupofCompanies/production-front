import axios from "axios";

function useApi(token = null) {
  return axios.create({
    baseURL: "https://production-services.onrender.com/api",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export default useApi;
