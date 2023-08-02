import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { usePost } from "../hooks/usePost";

const DeleteDialog = (props) => {
  const { id, isOpen, onClose } = props;

  const post = usePost(onClose);

  const deleteTodo = async () => {
    console.log("TODO削除ボタンがクリックされました");
    post.deleteTodo(id);
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
