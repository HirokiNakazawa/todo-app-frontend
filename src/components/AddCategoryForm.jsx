import { FormControl, Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../recoil/SidebarState";
import CategoryField from "./CategoryField";
import AddCategoryButton from "./AddCategoryButton";

const AddCategoryForm = ({ drawerWidth }) => {
  const sidebar = useRecoilValue(sidebarState);

  return (
    <FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid gray",
          p: 2,
          gap: 2,
          width: drawerWidth,
        }}
      >
        <Typography variant="p">カテゴリ追加</Typography>
        <Typography variant="p" color="red">
          {sidebar.errorMsg}
        </Typography>
        <CategoryField />
        <AddCategoryButton />
      </Box>
    </FormControl>
  );
};

export default AddCategoryForm;
