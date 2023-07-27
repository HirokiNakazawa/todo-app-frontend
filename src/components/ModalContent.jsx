import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const ModalContent = (props) => {
  const { isRegister, isLogin, title, onClose } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("登録 or ログインボタンがクリックされました");
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          width: 500,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // 横方向に配置
              p: 2,
              gap: 2,
            }}
          >
            <Box sx={{ mb: 2, borderBottom: "1px solid gray" }}>
              <Typography variant="h4">{title}</Typography>
            </Box>
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
      </Box>
    </>
  );
};

export default ModalContent;
