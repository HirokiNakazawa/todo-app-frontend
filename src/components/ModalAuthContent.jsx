import { Box, FormControl } from "@mui/material";
import AuthNameField from "./AuthNameField";
import AuthPasswordField from "./AuthPasswordField";

const ModalAuthContent = () => {
  return (
    <FormControl fullWidth>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AuthNameField />
        <AuthPasswordField />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
