import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modalState, errorMsgState } from "../recoil/ModalState";

const ModalHeader = () => {
  const modal = useRecoilValue(modalState);
  const errorMessage = useRecoilValue(errorMsgState);

  return (
    <>
      <Box sx={{ borderBottom: "1px solid gray" }}>
        <Typography variant="h4">{modal.title}</Typography>
      </Box>
      <Typography variant="p" color="red">
        {errorMessage}
      </Typography>
    </>
  );
};

export default ModalHeader;
