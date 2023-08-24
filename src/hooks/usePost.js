import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { sidebarCategoryState, sidebarState } from "../recoil/SidebarState";
import { userCategoriesState, userState } from "../recoil/UserState";
import { useApi } from "./useApi";
import { useUpdate } from "./useUpdate";
import {
  mainCategoryState,
  todoState,
  limitDateState,
  todoIdState,
} from "../recoil/MainState";
import dayjs from "dayjs";
import { useCloseModal } from "./useCloseModal";

const usePost = () => {
  const [sidebarCategory, setSidebarCategory] =
    useRecoilState(sidebarCategoryState);

  const mainCategory = useRecoilValue(mainCategoryState);
  const todoId = useRecoilValue(todoIdState);
  const todo = useRecoilValue(todoState);
  const limitDate = useRecoilValue(limitDateState);
  const setModal = useSetRecoilState(modalState);
  const setSidebar = useSetRecoilState(sidebarState);

  const user = useRecoilValue(userState);
  const userCategories = useRecoilValue(userCategoriesState);

  const api = useApi();
  const closeModal = useCloseModal();
  const update = useUpdate();

  // カテゴリ新規作成
  const createCategory = async () => {
    try {
      const data = {
        user_id: user.id,
        category: sidebarCategory,
      };
      const response = await api.postCategory(data);
      console.log(response);
      update.updateCategories(user.id);
      setSidebarCategory("");
      setSidebar({ errorMsg: "" });
    } catch (error) {
      console.log(error);
      setSidebar({ errorMsg: "カテゴリ追加に失敗しました" });
    }
  };

  // TODO新規作成
  const createTodo = async () => {
    try {
      const selectedCategory = userCategories.find(
        (item) => item.category === mainCategory
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
      closeModal.closeModal();
    } catch (error) {
      console.log(error);
      setModal({ errorMsg: "TODO作成に失敗しました" });
    }
  };

  // TODOの状態更新
  const updateStatus = async (todo) => {
    try {
      const response = await api.updateTodoStatus(todo);
      console.log(response);
      update.updateTodos(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  // TODO更新
  const updateTodo = async () => {
    try {
      const selectedCategory = userCategories.find(
        (item) => item.category === mainCategory
      );
      const data = {
        category_id: selectedCategory.id,
        todo: todo,
        limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
      };
      const response = await api.updateTodo(data, todoId);
      console.log(response);
      update.updateTodos(user.id);
      closeModal.closeModal();
    } catch (error) {
      console.log(error);
      setModal({ errorMsg: "TODO編集に失敗しました" });
    }
  };

  // TODO削除
  const deleteTodo = async (id) => {
    try {
      const response = await api.deleteTodo(id);
      console.log(response);
      update.updateTodos(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  return { createCategory, createTodo, updateStatus, updateTodo, deleteTodo };
};

export { usePost };
