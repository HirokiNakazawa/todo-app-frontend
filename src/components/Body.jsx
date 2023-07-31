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
  Modal,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { Typography } from "@mui/material";
import ModalContent from "./ModalContent";

const Body = () => {
  const { userId, isLoggedIn } = useContext(AuthContext);

  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [userTodos, setUserTodos] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !hasLoggedIn) {
      getUserTodo(userId);
      setHasLoggedIn(false);
    }
  }, [isLoggedIn, hasLoggedIn, userId]);

  const handleOpenCreateModal = () => {
    console.log("タスク追加ボタンをクリックしました");
    setTitle("新規タスク");
    setIsCreate(true);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    console.log("モーダルを閉じます");
    setIsModal(false);
    setIsCreate(false);
    setIsUpdate(false);
  };

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

  const updateTodoStatus = async (userTodo) => {
    try {
      const url = "http://todo-app-api/api/todos/update/" + userTodo.id;
      const data = {
        is_completed: userTodo.is_completed === 0 ? 1 : 0,
      };

      const response = await axios.put(url, data);
      console.log(response.data);

      getUserTodo(userId);
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
          <Box>
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
              <Button
                variant="outlined"
                startIcon={<AddCircleOutline />}
                onClick={handleOpenCreateModal}
              >
                タスク追加
              </Button>
            </Box>
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
                        <Button
                          variant="outlined"
                          onClick={() => updateTodoStatus(userTodo)}
                          color={
                            userTodo.is_completed === 1 ? "success" : "primary"
                          }
                        >
                          {userTodo.is_completed === 1 ? "完了" : "未完"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Modal open={isModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  boxShadow: 24,
                  width: 500,
                }}
              >
                <ModalContent
                  isCreate={isCreate}
                  isUpdate={isUpdate}
                  title={title}
                  getUserTodo={getUserTodo}
                  onClose={handleCloseModal}
                />
              </Box>
            </Modal>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Body;
