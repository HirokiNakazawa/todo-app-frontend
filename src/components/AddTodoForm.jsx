import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";

const AddTodoForm = () => {
  const setModal = useSetRecoilState(modalState);

  const handleOpenCreateModal = () => {
    console.log("タスク追加ボタンをクリックしました");
    setModal({
      isOpen: true,
      isCreate: true,
      title: "TODO追加",
      buttonText: "作成",
    });
  };

  return (
    <Button
      variant="outlined"
      startIcon={<AddCircleOutline />}
      onClick={handleOpenCreateModal}
    >
      タスク追加
    </Button>
  );
};

export default AddTodoForm;
