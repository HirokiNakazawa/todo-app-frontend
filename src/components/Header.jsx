import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { loginState, userState } from "../recoil/UserState";

const Header = () => {
  const setModal = useSetRecoilState(modalState);
  const user = useRecoilValue(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const handleOpenRegisterModal = () => {
    console.log("新規登録ボタンをクリックしました");
    setModal({
      isOpen: true,
      isRegister: true,
      title: "新規登録",
      buttonText: "新規登録",
    });
  };

  const handleOpenLoginModal = () => {
    console.log("ログインボタンをクリックしました");
    setModal({
      isOpen: true,
      isLogin: true,
      title: "ログイン",
      buttonText: "ログイン",
    });
  };

  const handleLogout = () => {
    console.log("ログアウトボタンをクリックしました");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODOリスト
          </Typography>

          {isLoggedIn ? (
            <>
              <Typography>{user.name}ログイン中</Typography>
              <Button color="inherit" onClick={handleLogout}>
                ログアウト
              </Button>
            </>
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
    </>
  );
};

export default Header;
