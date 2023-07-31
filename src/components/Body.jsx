import {
  Box,
  Button,
  Toolbar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
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
        {isLoggedIn ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography>カテゴリ：</Typography>
            <Button variant="outlined" startIcon={<AddCircleOutline />}>
              タスク追加
            </Button>
          </Box>
        ) : null}
        {isLoggedIn ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>カテゴリ</TableCell>
                  <TableCell>タスク名</TableCell>
                  <TableCell>期限</TableCell>
                  <TableCell>状態</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userTodos.map((userTodo) => (
                  <TableRow key={userTodo.id}>
                    <TableCell>{userTodo.category_name}</TableCell>
                    <TableCell>{userTodo.todo}</TableCell>
                    <TableCell>
                      {userTodo.limit_date ? userTodo.limit_date : "期限なし"}
                    </TableCell>
                    <TableCell>
                      {userTodo.is_completed === 1 ? "完了" : "未完"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </Box>
    </>
  );
};

export default Body;
