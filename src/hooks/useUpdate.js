import { useCallback } from "react";
import { useApi } from "./useApi";
import { useSetRecoilState } from "recoil";
import { userCategoriesState, userTodosState } from "../recoil/UserState";

const useUpdate = () => {
  const seUserCategories = useSetRecoilState(userCategoriesState);
  const setUserTodos = useSetRecoilState(userTodosState);

  const api = useApi();

  // ログインユーザーのカテゴリ一覧を更新
  const updateCategories = useCallback(
    async (userId) => {
      try {
        const response = await api.getUserCategories(userId);
        console.log(response);
        seUserCategories(response);
      } catch (error) {
        console.log(error);
      }
    },
    [api, seUserCategories]
  );

  // ログインユーザーのTODO一覧を更新
  const updateTodos = useCallback(
    async (userId) => {
      try {
        const response = await api.getUserTodos(userId);
        console.log(response);
        setUserTodos(response);
      } catch (error) {
        console.log(error);
      }
    },
    [api, setUserTodos]
  );

  return { updateCategories, updateTodos };
};

export { useUpdate };
