import axios from "axios";

const API_BASE_URL = "http://todo-app-api/api";

const useApi = () => {
  const postRegister = async (data) => {
    try {
      const url = `${API_BASE_URL}/register`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const postLogin = async (data) => {
    try {
      const url = `${API_BASE_URL}/login`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { postRegister, postLogin };
};

export { useApi };
