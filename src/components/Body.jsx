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
import dayjs from "dayjs";
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
  const [todos, setTodos] = useState({});
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
    setTitle("新規TODO");
    setIsCreate(true);
    setIsModal(true);
  };

  const handleOpenUpdateModal = (userTodo) => {
    console.log("タスク編集ボタンをクリックしました");
    setTodos(userTodo);
    console.log(userTodo);
    setTitle("TODO編集");
    setIsUpdate(true);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    console.log("モーダルを閉じます");
    setIsModal(false);
    setIsCreate(false);
    setIsUpdate(false);
  };

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
              <Table
                sx={{
                  minWidth: 650,
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">カテゴリ</TableCell>
                    <TableCell align="center">タスク名</TableCell>
                    <TableCell align="center">期限</TableCell>
                    <TableCell align="center">状態</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userTodos.map((userTodo) => (
                    <TableRow key={userTodo.id}>
                      <TableCell align="center">
                        {userTodo.category_name}
                      </TableCell>
                      <TableCell>{userTodo.todo}</TableCell>
                      <TableCell align="center">
                        {userTodo.limit_date
                          ? dayjs(userTodo.limit_date).format("YYYY/MM/DD")
                          : "期限なし"}
                      </TableCell>
                      <TableCell align="center">
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
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Button
                            variant="outlined"
                            color="info"
                            onClick={() => handleOpenUpdateModal(userTodo)}
                          >
                            編集
                          </Button>
                          <Button variant="outlined" color="error">
                            削除
                          </Button>
                        </Box>
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
                  todos={todos}
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
