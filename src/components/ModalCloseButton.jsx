import { Button } from "@mui/material";

const ModalCloseButton = ({ onClose }) => {
  return (
    <Button onClick={onClose} variant="contained" mt={3}>
      閉じる
    </Button>
  );
};

export default ModalCloseButton;
