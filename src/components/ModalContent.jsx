import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const ModalContent = (props) => {
  const { title, onClose } = props;

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
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 400,
            m: "auto",
          }}
        >
          <Typography variant="h5">{title}</Typography>
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
          <Button type="submit" variant="contained" color="primary">
            {title}
          </Button>
        </Box>
      </form>
      <Button onClick={onClose} variant="contained" mt={3}>
        閉じる
      </Button>
    </>
  );
};

export default ModalContent;
