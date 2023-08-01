import { Button } from "@mui/material";
import { useApi } from "../hooks/useApi";

const UpdateStatusButton = (props) => {
  const { todo, onUpdate } = props;
  const api = useApi();

  const updateTodoStatus = async (todo) => {
    console.log("ステータスボタンがクリックされました");
    try {
      const response = await api.updateTodoStatus(todo);
      console.log(response);
      onUpdate();
    } catch (error) {
      console.log(error);
    }
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
