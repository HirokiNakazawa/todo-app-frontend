import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryState,
  errorMsgState,
  limitDateState,
  todoIdState,
  todoState,
} from "../recoil/ModalState";
import dayjs from "dayjs";
import { categoriesState, userState } from "../recoil/UserState";
import { useApi } from "./useApi";
import { useUpdate } from "./useUpdate";
import { postErrorMsgState } from "../recoil/PostState";

const usePost = (onClose) => {
  const todoId = useRecoilValue(todoIdState);
  const [category, setCategory] = useRecoilState(categoryState);
  const todo = useRecoilValue(todoState);
  const limitDate = useRecoilValue(limitDateState);
  const setErrorMsg = useSetRecoilState(errorMsgState);
  const setPostErrorMsg = useSetRecoilState(postErrorMsgState);

  const user = useRecoilValue(userState);
  const categories = useRecoilValue(categoriesState);

  const api = useApi();
  const update = useUpdate();

  const createCategory = async () => {
    try {
      const data = {
        user_id: user.id,
        category: category,
      };
      const response = await api.postCategory(data);
      console.log(response);
      update.updateCategories(user.id);
      setCategory("");
      setPostErrorMsg("");
    } catch (error) {
      console.log(error);
      setPostErrorMsg("カテゴリ追加に失敗しました");
    }
  };

  const createTodo = async () => {
    try {
      const selectedCategory = categories.find(
        (item) => item.category === category
      );
      const data = {
        user_id: user.id,
        category_id: selectedCategory.id,
        todo: todo,
        limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
        is_completed: false,
      };
      const response = await api.postTodo(data);
      console.log(response);
      update.updateTodos(user.id);
      onClose();
    } catch (error) {
      console.log(error);
      setErrorMsg("TODO作成に失敗しました");
    }
  };

  const updateStatus = async (todo) => {
    try {
      const response = await api.updateTodoStatus(todo);
      console.log(response);
      update.updateTodos(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async () => {
    try {
      const selectedCategory = categories.find(
        (item) => item.category === category
      );
      const data = {
        category_id: selectedCategory.id,
        todo: todo,
        limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
      };
      const response = await api.updateTodo(data, todoId);
      console.log(response);
      update.updateTodos(user.id);
      onClose();
    } catch (error) {
      console.log(error);
      setErrorMsg("TODO編集に失敗しました");
    }
  };

  return { createCategory, createTodo, updateStatus, updateTodo };
};

export { usePost };
