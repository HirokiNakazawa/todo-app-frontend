import { Box, Toolbar } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoriesState,
  loginState,
  todosState,
  userState,
} from "../recoil/UserState";
import {
  addCategoryState,
  addTodoState,
  deleteTodoState,
  updateStatusState,
  updateTodoState,
} from "../recoil/PostState";
import { useState, useEffect, useCallback } from "react";
import { useApi } from "../hooks/useApi";
import Sidebar from "./Sidebar";
import AddTodoForm from "./AddTodoForm";
import TodoTable from "./TodoTable";
import CustomModal from "./CustomModal";

const Body = () => {
  const user = useRecoilValue(userState);
  const isLoggedIn = useRecoilValue(loginState);
  const setCategories = useSetRecoilState(categoriesState);
  const [todos, setTodos] = useRecoilState(todosState);
  const [addCategory, setAddCategory] = useRecoilState(addCategoryState);
  const [addTodo, setAddTodo] = useRecoilState(addTodoState);
  const [updateStatus, setUpdateStatus] = useRecoilState(updateStatusState);
  const [updateTodo, setUpdateTodo] = useRecoilState(updateTodoState);
  const [deleteTodo, setDeleteTodo] = useRecoilState(deleteTodoState);

  const [isMounted, setIsMounted] = useState(false);
  const [inCompletedTodos, setInCompletedTodos] = useState({});
  const [completedTodos, setCompletedTodos] = useState({});

  const api = useApi();

  const updateUserCategories = useCallback(async () => {
    try {
      const response = await api.getUserCategories(user.id);
      console.log(response);
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  }, [api, user.id, setCategories]);

  const updateUserTodos = useCallback(async () => {
    try {
      const response = await api.getUserTodos(user.id);
      console.log(response);
      setTodos(response);
    } catch (error) {
      console.log(error);
    }
  }, [api, user.id, setTodos]);

  useEffect(() => {
    if (isLoggedIn && !isMounted) {
      updateUserCategories();
      updateUserTodos();
      setIsMounted(true);
    }
  }, [isLoggedIn, isMounted, updateUserCategories, updateUserTodos]);

  useEffect(() => {
    if (addCategory) {
      updateUserCategories();
      setAddCategory(false);
    }
  }, [addCategory, updateUserCategories, setAddCategory]);

  useEffect(() => {
    if (addTodo || updateStatus || updateTodo || deleteTodo) {
      updateUserTodos();
      setAddTodo(false);
      setUpdateStatus(false);
      setUpdateTodo(false);
      setDeleteTodo(false);
    }
  }, [
    addTodo,
    updateStatus,
    updateTodo,
    deleteTodo,
    updateUserTodos,
    setAddTodo,
    setUpdateStatus,
    setUpdateTodo,
    setDeleteTodo,
  ]);

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
          <Box
            sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2 }}
            component="main"
          >
            <Toolbar />
            <AddTodoForm />
            <TodoTable status="未完了" todos={inCompletedTodos} />
            <TodoTable status="完了" todos={completedTodos} />
          </Box>
        </>
      ) : null}
    </>
  );
};

export default Body;
