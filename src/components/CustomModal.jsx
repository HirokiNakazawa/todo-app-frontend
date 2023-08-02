import { Box, Modal } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { nameState, passwordState } from "../recoil/AuthState";
import { sidebarState } from "../recoil/SidebarState";
import {
  mainCategoryState,
  todoState,
  limitDateState,
} from "../recoil/MainState";
import ModalHeader from "./ModalHeader";
import ModalRegisterForm from "./ModalRegisterForm";
import ModalLoginForm from "./ModalLoginForm";
import ModalCreateForm from "./ModalCreateForm";
import ModalUpdateForm from "./ModalUpdateForm";

const CustomModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const setSidebar = useSetRecoilState(sidebarState);
  const setName = useSetRecoilState(nameState);
  const setPassword = useSetRecoilState(passwordState);
  const setMainCategory = useSetRecoilState(mainCategoryState);
  const setTodo = useSetRecoilState(todoState);
  const setLimitDate = useSetRecoilState(limitDateState);

  const handleCloseModal = () => {
    console.log("モーダルを閉じます");
    setModal({
      isOpen: false,
      isRegister: false,
      isLogin: false,
      isCreate: false,
      isUpdate: false,
      title: "",
      buttonText: "",
      errorMsg: "",
    });
    setSidebar({ errorMsg: "" });
    setName("");
    setPassword("");
    setMainCategory("");
    setTodo("");
    setLimitDate(null);
  };

  return (
    <Modal open={modal.isOpen}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 5,
            p: 2,
            gap: 2,
          }}
        >
          <ModalHeader />
          {modal.isRegister ? (
            <ModalRegisterForm onClose={handleCloseModal} />
          ) : null}
          {modal.isLogin ? <ModalLoginForm onClose={handleCloseModal} /> : null}
          {modal.isCreate ? (
            <ModalCreateForm onClose={handleCloseModal} />
          ) : null}
          {modal.isUpdate ? (
            <ModalUpdateForm onClose={handleCloseModal} />
          ) : null}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
