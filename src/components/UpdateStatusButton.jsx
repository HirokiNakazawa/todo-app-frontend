import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { useApi } from "../hooks/useApi";
import { updateStatusState } from "../recoil/PostState";

const UpdateStatusButton = ({ todo }) => {
  const setUpdateStatus = useSetRecoilState(updateStatusState);
  const api = useApi();

  const updateTodoStatus = async (todo) => {
    console.log("ステータスボタンがクリックされました");
    try {
      const response = await api.updateTodoStatus(todo);
      console.log(response);
      setUpdateStatus(true);
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
