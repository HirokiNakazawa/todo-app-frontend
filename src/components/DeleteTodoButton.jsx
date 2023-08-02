import { Button } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoIdState } from "../recoil/ModalState";
import DeleteDialog from "./DeleteDialog";

const DeleteTodoButton = ({ todo }) => {
  const [todoId, setTodoId] = useRecoilState(todoIdState);

  const [isDialog, setIsDialog] = useState(false);

  const handleOpenDeleteDialog = () => {
    setTodoId(todo.id);
    setIsDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDialog(false);
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={handleOpenDeleteDialog}>
        削除
      </Button>
      <DeleteDialog
        id={todoId}
        isOpen={isDialog}
        onClose={handleCloseDeleteDialog}
      />
    </>
  );
};

export default DeleteTodoButton;
