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

  // ユーザーに紐づくTODO一覧取得
  const getUserTodos = async (id) => {
    try {
      const url = `${API_BASE_URL}/todos/${id}`;
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

  // TODO作成
  const postTodo = async (data) => {
    try {
      const url = `${API_BASE_URL}/todos/create`;
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // 状態更新
  const updateTodoStatus = async (todo) => {
    try {
      const url = `${API_BASE_URL}/todos/update/${todo.id}`;
      const data = {
        is_completed: todo.is_completed === 0 ? 1 : 0,
      };
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // TODO更新
  const updateTodo = async (data, id) => {
    try {
      const url = `${API_BASE_URL}/todos/update/${id}`;
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    postRegister,
    postLogin,
    getUserCategories,
    getUserTodos,
    postCategory,
    postTodo,
    updateTodoStatus,
    updateTodo,
  };
};

export { useApi };
