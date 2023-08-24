import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { REGISTER_BUTTON } from "../config/config";

const RegisterButton = () => {
  const setModal = useSetRecoilState(modalState);

  const handleOpenRegisterModal = () => {
    console.log("新規登録ボタンをクリックしました");
    setModal({
      isOpen: true,
      isRegister: true,
      title: "新規登録",
      buttonText: "新規登録",
    });
  };

  return (
    <Button color="inherit" onClick={handleOpenRegisterModal}>
      {REGISTER_BUTTON}
    </Button>
  );
};

export default RegisterButton;
