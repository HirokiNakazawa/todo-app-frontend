import { Box, FormControl } from "@mui/material";
import SelectCategoryField from "./SelectCategoryField";
import TodoField from "./TodoField";
import LimitDateField from "./LimitDateField";

const ModalTodoContent = () => {
  return (
    <FormControl fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
        }}
      >
        <SelectCategoryField />
        <TodoField />
        <LimitDateField />
      </Box>
    </FormControl>
  );
};

export default ModalTodoContent;
