import { Box, Typography, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const ModalContent = (props) => {
  const { isRegister, isLogin, title, onClose } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("登録 or ログインボタンがクリックされました");

    // 新規登録の場合
    if (isRegister) {
      if (postRegister()) {
        console.log("register complete");
        onClose();
      }
    }

    // ログインの場合
    if (isLogin) {
      if (postLogin()) {
        console.log("Success Login!");
        onClose();
      }
    }
  };

  const postRegister = async () => {
    try {
      const url = "http://todo-app-api/api/register";
      const data = getAuthData();

      const response = await axios.post(url, data);

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      setErrorMessage("ユーザー登録に失敗しました");
    }
    return false;
  };

  const postLogin = async () => {
    try {
      const url = "http://todo-app-api/api/login";
      const data = getAuthData();

      const response = await axios.post(url, data);

      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrorMessage("ログインに失敗しました");
    }
    return false;
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
            flexDirection: "column", // 横方向に配置
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
