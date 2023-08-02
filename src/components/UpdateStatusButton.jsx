import { Button } from "@mui/material";
import { usePost } from "../hooks/usePost";

const UpdateStatusButton = ({ todo }) => {
  const post = usePost();

  const updateTodoStatus = async (todo) => {
    console.log("ステータスボタンがクリックされました");
    await post.updateStatus(todo);
  };

  return (
    <Button
      variant="outlined"
      onClick={() => updateTodoStatus(todo)}
      color={todo.is_completed === 1 ? "success" : "primary"}
    >
      {todo.is_completed === 1 ? "完了" : "未完"}
    </Button>
  );
};

export default UpdateStatusButton;
