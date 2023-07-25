import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalContent from "./ModalContent";

const Header = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    console.log(isModal);
  }, [isModal]);

  const onRegisterClick = () => {
    console.log("新規登録ボタンをクリックしました");
    setIsRegister(true);
    setIsModal(true);
  };

  const onLoginClick = () => {
    console.log("ログインボタンをクリックしました");
    setIsLogin(true);
    setIsModal(true);
  };

  const handleClose = () => {
    console.log("モーダル閉じるボタンをクリックしました");
    setIsModal(false);
    setIsRegister(false);
    setIsLogin(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TODOリスト
            </Typography>
            <Button color="inherit" onClick={onRegisterClick}>
              新規登録
            </Button>
            <Button color="inherit" onClick={onLoginClick}>
              ログイン
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Modal open={isModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            maxWidth: "80vw",
          }}
        >
          <ModalContent
            isRegister={isRegister}
            isLogin={isLogin}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
