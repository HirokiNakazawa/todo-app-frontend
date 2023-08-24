import { Box, Modal } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/ModalState";
import ModalHeader from "./ModalHeader";
import ModalRegisterForm from "./ModalRegisterForm";
import ModalLoginForm from "./ModalLoginForm";
import ModalCreateForm from "./ModalCreateForm";
import ModalUpdateForm from "./ModalUpdateForm";

const CustomModal = () => {
  const modal = useRecoilValue(modalState);

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
          {modal.isRegister ? <ModalRegisterForm /> : null}
          {modal.isLogin ? <ModalLoginForm /> : null}
          {modal.isCreate ? <ModalCreateForm /> : null}
          {modal.isUpdate ? <ModalUpdateForm /> : null}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
