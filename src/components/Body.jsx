import { useRecoilValue } from "recoil";
import {
  // categoriesState,
  // currentCategoryState,
  loginState,
  todosState,
  userState,
} from "../recoil/UserState";
// import {
//   addCategoryState,
//   addTodoState,
//   deleteTodoState,
//   updateStatusState,
//   updateTodoState,
// } from "../recoil/PostState";
import { useState, useEffect } from "react";
import { useUpdate } from "../hooks/useUpdate";
import Sidebar from "./Sidebar";
import CustomModal from "./CustomModal";
import MainContent from "./MainContent";

const Body = () => {
  const user = useRecoilValue(userState);
  const isLoggedIn = useRecoilValue(loginState);
  // const setCategories = useSetRecoilState(categoriesState);
  // const currentCategory = useRecoilValue(currentCategoryState);
  const todos = useRecoilValue(todosState);
  // const [addCategory, setAddCategory] = useRecoilState(addCategoryState);
  // const [addTodo, setAddTodo] = useRecoilState(addTodoState);
  // const [updateStatus, setUpdateStatus] = useRecoilState(updateStatusState);
  // const [updateTodo, setUpdateTodo] = useRecoilState(updateTodoState);
  // const [deleteTodo, setDeleteTodo] = useRecoilState(deleteTodoState);

  const [isMounted, setIsMounted] = useState(false);
  const [inCompletedTodos, setInCompletedTodos] = useState({});
  const [completedTodos, setCompletedTodos] = useState({});

  // const api = useApi();
  const update = useUpdate();

  // const updateUserCategories = useCallback(async () => {
  //   try {
  //     const response = await api.getUserCategories(user.id);
  //     console.log(response);
  //     setCategories(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [api, user.id, setCategories]);

  // const updateUserTodos = useCallback(async () => {
  //   try {
  //     const response = await api.getUserTodos(user.id);
  //     console.log(response);
  //     setTodos(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [api, user.id, setTodos]);

  useEffect(() => {
    if (isLoggedIn && !isMounted) {
      // updateUserCategories();
      update.updateCategories(user.id);
      // updateUserTodos();
      update.updateTodos(user.id);
      setIsMounted(true);
    }
  }, [isLoggedIn, isMounted, update, user.id]);

  // useEffect(() => {
  //   if (addCategory) {
  //     updateUserCategories();
  //     setAddCategory(false);
  //   }
  // }, [addCategory, updateUserCategories, setAddCategory]);

  // useEffect(() => {
  //   if (addTodo || updateStatus || updateTodo || deleteTodo) {
  //     updateUserTodos();
  //     setAddTodo(false);
  //     setUpdateStatus(false);
  //     setUpdateTodo(false);
  //     setDeleteTodo(false);
  //   }
  // }, [
  //   addTodo,
  //   updateStatus,
  //   updateTodo,
  //   deleteTodo,
  //   updateUserTodos,
  //   setAddTodo,
  //   setUpdateStatus,
  //   setUpdateTodo,
  //   setDeleteTodo,
  // ]);

  useEffect(() => {
    setInCompletedTodos(
      todos.filter((userTodo) => userTodo.is_completed === 0)
    );
    setCompletedTodos(todos.filter((userTodo) => userTodo.is_completed === 1));
  }, [todos]);

  return (
    <>
      <CustomModal />
      {isLoggedIn ? (
        <>
          <Sidebar />
          <MainContent
            inCompletedTodos={inCompletedTodos}
            completedTodos={completedTodos}
          />
        </>
      ) : null}
    </>
  );
};

export default Body;
