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
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    console.log(isModal);
  }, [isModal]);

  const handleOpenRegisterModal = () => {
    console.log("新規登録ボタンをクリックしました");
    setTitle("新規登録");
    setIsRegister(true);
    setIsModal(true);
  };

  const handleOpenLoginModal = () => {
    console.log("ログインボタンをクリックしました");
    setTitle("ログイン");
    setIsLogin(true);
    setIsModal(true);
  };

  const handleCloseModal = () => {
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
            <Button color="inherit" onClick={handleOpenRegisterModal}>
              新規登録
            </Button>
            <Button color="inherit" onClick={handleOpenLoginModal}>
              ログイン
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Modal open={isModal}>
        <ModalContent
          isRegister={isRegister}
          isLogin={isLogin}
          title={title}
          onClose={handleCloseModal}
        />
      </Modal>
    </>
  );
};

export default Header;
