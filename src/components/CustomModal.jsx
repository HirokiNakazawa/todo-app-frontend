import { Box, Modal } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  categoryState,
  errorMsgState,
  limitDateState,
  modalState,
  nameState,
  passwordState,
  todoState,
} from "../recoil/ModalState";
import ModalHeader from "./ModalHeader";
import ModalRegisterForm from "./ModalRegisterForm";
import { postErrorMsgState } from "../recoil/PostState";
import ModalLoginForm from "./ModalLoginForm";
import ModalCreateForm from "./ModalCreateForm";
import ModalUpdateForm from "./ModalUpdateForm";

const CustomModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const setErrorMsg = useSetRecoilState(errorMsgState);
  const setPostErrorMsg = useSetRecoilState(postErrorMsgState);
  const setName = useSetRecoilState(nameState);
  const setPassword = useSetRecoilState(passwordState);
  const setCategory = useSetRecoilState(categoryState);
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
    });
    setErrorMsg("");
    setPostErrorMsg("");
    setName("");
    setPassword("");
    setCategory("");
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
