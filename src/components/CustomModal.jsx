import { Box, Modal } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/ModalState";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalAuthContent from "./ModalAuthContent";

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
            p: 2,
            gap: 2,
          }}
        >
          <ModalHeader />
          {modal.isRegister || modal.isLogin ? <ModalAuthContent /> : null}
        </Box>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default CustomModal;
