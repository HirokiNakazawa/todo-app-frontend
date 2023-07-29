import {
  Box,
  Toolbar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { Typography } from "@mui/material";

const Body = () => {
  const { userId, isLoggedIn } = useContext(AuthContext);

  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    if (isLoggedIn && !hasLoggedIn) {
      getUserTodo(userId);
      setHasLoggedIn(false);
    }
  }, [isLoggedIn, hasLoggedIn, userId]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   postTodo();
  // };

  const getUserTodo = async (userId) => {
    try {
      const url = "http://todo-app-api/api/todos/" + userId;

      const response = await axios.get(url);
      console.log(response.data);

      setUserTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const postTodo = () => {
  //   try {
  //     const url = "http://todo-app-api/api/todos/create";
  //     const data = {
  //       user_id: 1,
  //       category_id: 1,
  //       todo: "過去の回収率をグラフ表示する",
  //       is_completed: false,
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Sidebar />
      <Box
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2 }}
        component="main"
      >
        <Toolbar />
        <Typography>カテゴリ：</Typography>
        {/* <Box>
        {isLoggedIn ? (
          <div>
          <form onSubmit={handleSubmit}></form>
          </div>
          ) : null}
        </Box> */}
        {isLoggedIn ? (
          <Box sx={{ bgcolor: "background.paper" }}>
            <List sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Toolbar />
              {userTodos.map((userTodo) => (
                <ListItem key={userTodo.id}>
                  <Card sx={{ width: "80%" }}>
                    <CardContent
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItemText variant="body2">
                        {userTodo.category_name}
                      </ListItemText>
                      <ListItemText variant="body2">
                        {userTodo.todo}
                      </ListItemText>
                      <ListItemText variant="body2">
                        {userTodo.limit_date}
                      </ListItemText>
                      <ListItemText variant="body2">
                        {userTodo.is_completed ? "完了" : "未完了"}
                      </ListItemText>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Body;
