import { FormControl, Box, Typography, TextField, Button } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
import { userState } from "../recoil/UserState";
import { addCategoryState, postErrorMsgState } from "../recoil/PostState";
import { useApi } from "../hooks/useApi";

const AddCategoryForm = ({ drawerWidth }) => {
  const user = useRecoilValue(userState);
  const [postErrorMsg, setPostErrorMsg] = useRecoilState(postErrorMsgState);
  const setAddCategory = useSetRecoilState(addCategoryState);

  const [category, setCategory] = useState("");

  const api = useApi();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = {
        user_id: user.id,
        category: category,
      };
      const response = await api.postCategory(data);
      console.log(response);
      setAddCategory(true);
      setCategory("");
    } catch (error) {
      console.log(error);
      setPostErrorMsg("カテゴリ追加に失敗しました");
    }
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
