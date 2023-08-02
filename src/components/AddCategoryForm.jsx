import { FormControl, Box, Typography, TextField, Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { postErrorMsgState } from "../recoil/PostState";
import { usePost } from "../hooks/usePost";
import { categoryState } from "../recoil/ModalState";

const AddCategoryForm = ({ drawerWidth }) => {
  const [category, setCategory] = useRecoilState(categoryState);
  const postErrorMsg = useRecoilValue(postErrorMsgState);

  const post = usePost();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
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
          {postErrorMsg}
        </Typography>
        <TextField
          label="カテゴリ"
          name="カテゴリ"
          value={category}
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
