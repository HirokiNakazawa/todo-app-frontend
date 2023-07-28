import { useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import AuthContext from "../context/AuthContext";

const Body = () => {
  const { userId, userName, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    getUserTodo();
  }, [isLoggedIn]);

  const getUserTodo = () => {};

  return (
    <>
      <Sidebar />
    </>
  );
};

export default Body;
