import { Box, Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/ModalState";
import ModalCloseButton from "./ModalCloseButton";

const ModalFooter = (props) => {
  const { handleSubmit, onClose } = props;
  const modal = useRecoilValue(modalState);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        p: 2,
        gap: 2,
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        {modal.buttonText}
      </Button>
      <ModalCloseButton onClose={onClose} />
    </Box>
  );
};

export default ModalFooter;
