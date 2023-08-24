import { Button } from "@mui/material";
import { useCloseModal } from "../hooks/useCloseModal";

const ModalCloseButton = () => {
  const closeModal = useCloseModal();

  const handleCloseModal = () => {
    closeModal.closeModal();
  };

  return (
    <Button onClick={handleCloseModal} variant="contained" mt={3}>
      閉じる
    </Button>
  );
};

export default ModalCloseButton;
