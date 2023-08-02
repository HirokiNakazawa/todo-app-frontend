import { useRecoilValue } from "recoil";
import { userState, userTodosState } from "../recoil/UserState";
import { useState, useEffect } from "react";
import { useUpdate } from "../hooks/useUpdate";
import Sidebar from "./Sidebar";
import CustomModal from "./CustomModal";
import MainContent from "./MainContent";

const Body = () => {
  const user = useRecoilValue(userState);
  const userTodos = useRecoilValue(userTodosState);

  const [isMounted, setIsMounted] = useState(false);
  const [inCompletedTodos, setInCompletedTodos] = useState({});
  const [completedTodos, setCompletedTodos] = useState({});

  const update = useUpdate();

  useEffect(() => {
    if (user.isLoggedin && !isMounted) {
      update.updateCategories(user.id);
      update.updateTodos(user.id);
      setIsMounted(true);
    }
  }, [user.isLoggedin, isMounted, update, user.id]);

  useEffect(() => {
    setInCompletedTodos(
      userTodos.filter((userTodo) => userTodo.is_completed === 0)
    );
    setCompletedTodos(
      userTodos.filter((userTodo) => userTodo.is_completed === 1)
    );
  }, [userTodos]);

  return (
    <>
      <CustomModal />
      {user.isLoggedin ? (
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
