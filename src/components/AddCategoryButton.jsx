import { Button } from "@mui/material";
import { usePost } from "../hooks/usePost";

const AddCategoryButton = () => {
  const post = usePost();

  const handleSubmit = async () => {
    console.log("カテゴリ追加ボタンをクリックしました");
    await post.createCategory();
  };

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={handleSubmit}
    >
      追加
    </Button>
  );
};

export default AddCategoryButton;
