import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { modalState } from "../recoil/ModalState";

const ModalHeader = () => {
  const modal = useRecoilValue(modalState);

  return (
    <>
      <Box sx={{ borderBottom: "1px solid gray" }}>
        <Typography variant="h4">{modal.title}</Typography>
      </Box>
      <Typography variant="p" color="red">
        {modal.errorMsg}
      </Typography>
    </>
  );
};

export default ModalHeader;
