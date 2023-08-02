import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useSetRecoilState } from "recoil";
import { useApi } from "../hooks/useApi";
import { deleteTodoState } from "../recoil/PostState";

const DeleteDialog = (props) => {
  const { id, isOpen, onClose } = props;

  const setDeleteTodo = useSetRecoilState(deleteTodoState);

  const api = useApi();

  const deleteTodo = async () => {
    console.log("TODO削除ボタンがクリックされました");
    try {
      const response = await api.deleteTodo(id);
      console.log(response);
      setDeleteTodo(true);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>確認</DialogTitle>
      <DialogContent>
        <DialogContentText>本当に削除しますか？</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={deleteTodo} color="error">
          削除
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
