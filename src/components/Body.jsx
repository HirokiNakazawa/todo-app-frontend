import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Body = () => {
  const { userId, userName, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <>
      <p>{isLoggedIn ? "ログイン中" : "未ログイン"}</p>
      <p>{userId}</p>
      <p>{userName}</p>
    </>
  );
};

export default Body;
