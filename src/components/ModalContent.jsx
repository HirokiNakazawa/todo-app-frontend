import { Box, Typography, Button, TextField } from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const ModalContent = (props) => {
  const { isRegister, isLogin, title, onClose } = props;

  const { setUserId, setUserName, setIsLoggedIn } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" color="primary">
            {title}
          </Button>
          <Button onClick={onClose} variant="contained" mt={3}>
            閉じる
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ModalContent;
