import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import dayjs from "dayjs";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const ModalContent = (props) => {
  const {
    isRegister,
    isLogin,
    isCreate,
    isUpdate,
    title,
    todos,
    getUserTodos,
    onClose,
  } = props;

  const { userId, setUserId, setUserName, categories, setIsLoggedIn } =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [todo, setTodo] = useState("");
  const [limitDate, setLimitDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDateChange = (date) => {
    setLimitDate(date);
  };

  const handleSubmit = () => {
    // 新規登録の場合
    if (isRegister) {
      console.log("登録ボタンがクリックされました");
      postRegister();
    }

    // ログインの場合
    if (isLogin) {
      console.log("ログインボタンがクリックされました");
      postLogin();
    }

    // TODO作成の場合
    if (isCreate) {
      console.log("TODO作成ボタンがクリックされました");
      postCreate();
    }

    // TODO編集の場合
    if (isUpdate) {
      console.log("TODO更新ボタンがクリックされました");
      updateTodo();
    }
  };

  const postRegister = async () => {
    try {
      const url = "http://todo-app-api/api/register";
      const data = getAuthData();

      const response = await axios.post(url, data);

      console.log(response.data);

      setUserId(response.data.id);
      setUserName(response.data.name);
      setIsLoggedIn(true);
      onClose();
    } catch (error) {
      console.error(error);
      setErrorMessage("ユーザー登録に失敗しました");
    }
  };

  const postLogin = async () => {
    try {
      const url = "http://todo-app-api/api/login";
      const data = getAuthData();

      const response = await axios.post(url, data);

      console.log(response);

      setUserId(response.data.id);
      setUserName(response.data.name);
      setIsLoggedIn(true);
      onClose();
    } catch (error) {
      console.log(error);
      setErrorMessage("ログインに失敗しました");
    }
  };

  const getAuthData = () => {
    const data = {
      name: name,
      password: password,
    };
    return data;
  };

  const postCreate = async () => {
    try {
      const selectedCategory = categories.find(
        (item) => item.category === category
      );
      const categoryId = selectedCategory.id;

      const url = "http://todo-app-api/api/todos/create";
      const data = {
        user_id: userId,
        category_id: categoryId,
        todo: todo,
        limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
        is_completed: false,
      };

      console.log(data);

      const response = await axios.post(url, data);

      console.log(response);
      onClose();
      getUserTodos(userId);
    } catch (error) {
      console.log(error);
      setErrorMessage("TODO作成に失敗しました");
    }
  };

  const updateTodo = async () => {
    try {
      const todoId = todos.id;

      const selectedCategory = categories.find(
        (item) => item.category === category
      );
      const categoryId = selectedCategory.id;

      const url = "http://todo-app-api/api/todos/update/" + todoId;
      const data = {
        category_id: categoryId,
        todo: todo,
        limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
      };

      const response = await axios.put(url, data);

      console.log(response);
      onClose();
      getUserTodos(userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUpdate && todos) {
      setCategory(todos.category_name);
      setTodo(todos.todo);
      setLimitDate(todos.limit_date ? new Date(todos.limit_date) : null);
    }
  }, [isUpdate, todos]);

  return (
    <>
      {isRegister || isLogin ? (
        <FormControl fullWidth>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              gap: 2,
            }}
          >
            <Box sx={{ borderBottom: "1px solid gray" }}>
              <Typography variant="h4">{title}</Typography>
            </Box>
            <Typography variant="p" color="red">
              {errorMessage}
            </Typography>
            <TextField
              label="名前"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <TextField
              label="パスワード"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              p: 2,
              gap: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {title}
            </Button>
            <Button onClick={onClose} variant="contained" mt={3}>
              閉じる
            </Button>
          </Box>
        </FormControl>
      ) : null}
      {isCreate || isUpdate ? (
        <FormControl fullWidth>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              gap: 2,
            }}
          >
            <Box sx={{ borderBottom: "1px solid gray" }}>
              <Typography variant="h4">{title}</Typography>
            </Box>
            <Typography variant="p" color="red">
              {errorMessage}
            </Typography>
            <FormControl>
              <InputLabel id="select-category-label">カテゴリ</InputLabel>
              <Select
                labelId="select-category-label"
                id="select-category"
                value={category}
                label="カテゴリ"
                onChange={handleCategoryChange}
              >
                {categories.map((item) => (
                  <MenuItem key={item.id} value={item.category}>
                    {item.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="TODO"
              name="todo"
              value={todo}
              onChange={handleTodoChange}
              required
            ></TextField>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ja}
            >
              <DatePicker
                label="期限"
                name="limitDate"
                value={limitDate}
                onChange={handleDateChange}
                slotProps={{ textField: { variant: "outlined" } }}
              />
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              p: 2,
              gap: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {isCreate ? "作成" : "更新"}
            </Button>
            <Button onClick={onClose} variant="contained" mt={3}>
              閉じる
            </Button>
          </Box>
        </FormControl>
      ) : null}
    </>
  );
};

export default ModalContent;
