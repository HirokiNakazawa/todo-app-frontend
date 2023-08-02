import { useCallback } from "react";
import { useApi } from "./useApi";
import { useSetRecoilState } from "recoil";
import { categoriesState, todosState } from "../recoil/UserState";

const useUpdate = () => {
  const setCategories = useSetRecoilState(categoriesState);
  const setTodos = useSetRecoilState(todosState);

  const api = useApi();

  // ログインユーザーのカテゴリ一覧を更新
  const updateCategories = useCallback(
    async (userId) => {
      try {
        const response = await api.getUserCategories(userId);
        console.log(response);
        setCategories(response);
      } catch (error) {
        console.log(error);
      }
    },
    [api, setCategories]
  );

  // ログインユーザーのうTODO一覧を更新
  const updateTodos = useCallback(
    async (userId) => {
      try {
        const response = await api.getUserTodos(userId);
        console.log(response);
        setTodos(response);
      } catch (error) {
        console.log(error);
      }
    },
    [api, setTodos]
  );

  return { updateCategories, updateTodos };
};

export { useUpdate };
