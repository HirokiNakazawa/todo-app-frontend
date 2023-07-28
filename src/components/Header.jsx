import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalContent from "./ModalContent";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);

  const { userName, isLoggedIn } = useContext(AuthContext);

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
    console.log("モーダルを閉じます");
    setIsModal(false);
    setIsRegister(false);
    setIsLogin(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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

          {isLoggedIn ? (
            <Typography>{userName}ログイン中</Typography>
          ) : (
            <div>
              <Button color="inherit" onClick={handleOpenRegisterModal}>
                新規登録
              </Button>
              <Button color="inherit" onClick={handleOpenLoginModal}>
                ログイン
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Modal open={isModal}>
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
          <ModalContent
            isRegister={isRegister}
            isLogin={isLogin}
            title={title}
            onClose={handleCloseModal}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
