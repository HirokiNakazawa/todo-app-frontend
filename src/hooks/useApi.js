import axios from "axios";

const API_BASE_URL = "http://todo-app-api/api";

const useApi = () => {
  // ユーザー新規登録
  const postRegister = async (data) => {
    try {
      const url = `${API_BASE_URL}/register`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // ログイン
  const postLogin = async (data) => {
    try {
      const url = `${API_BASE_URL}/login`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // ユーザーに紐づくカテゴリ一覧取得
  const getUserCategories = async (id) => {
    try {
      const url = `${API_BASE_URL}/categories/${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // カテゴリ追加
  const postCategory = async (data) => {
    try {
      const url = `${API_BASE_URL}/categories/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { postRegister, postLogin, getUserCategories, postCategory };
};

export { useApi };
