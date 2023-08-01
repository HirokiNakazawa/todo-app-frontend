import { Box, Typography, Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import CustomModal from "./CustomModal";

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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography>カテゴリ：</Typography>
        <Button
          variant="outlined"
          startIcon={<AddCircleOutline />}
          onClick={handleOpenCreateModal}
        >
          タスク追加
        </Button>
      </Box>
      <CustomModal />
    </>
  );
};

export default AddTodoForm;
