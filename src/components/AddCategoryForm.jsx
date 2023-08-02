import { FormControl, Box, Typography, TextField, Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarCategoryState, sidebarState } from "../recoil/SidebarState";
import { usePost } from "../hooks/usePost";

const AddCategoryForm = ({ drawerWidth }) => {
  const [sidebarCategory, setSidebarCategory] =
    useRecoilState(sidebarCategoryState);
  const sidebar = useRecoilValue(sidebarState);

  const post = usePost();

  const handleCategoryChange = (e) => {
    setSidebarCategory(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("カテゴリ追加ボタンをクリックしました");
    await post.createCategory();
  };

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
        <TextField
          label="カテゴリ"
          name="カテゴリ"
          value={sidebarCategory}
          onChange={handleCategoryChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          追加
        </Button>
      </Box>
    </FormControl>
  );
};

export default AddCategoryForm;
