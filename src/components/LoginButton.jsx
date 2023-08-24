import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { LOGIN_BUTTON } from "../config/config";

const LoginButton = () => {
  const setModal = useSetRecoilState(modalState);

  const handleOpenLoginModal = () => {
    console.log("ログインボタンをクリックしました");
    setModal({
      isOpen: true,
      isLogin: true,
      title: "ログイン",
      buttonText: "ログイン",
    });
  };
  return (
    <Button color="inherit" onClick={handleOpenLoginModal}>
      {LOGIN_BUTTON}
    </Button>
  );
};

export default LoginButton;
