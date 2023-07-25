import { Typography, Button } from "@mui/material";

const ModalContent = (props) => {
  const { isRegister, isLogin, onClose } = props;

  return (
    <>
      <Typography variant="h5" mb={2}>
        モーダルのタイトル
      </Typography>
      <Typography variant="body1">
        モーダルの内容をここに記述します。
      </Typography>
      <Button onClick={onClose} variant="contained" mt={3}>
        閉じる
      </Button>
    </>
  );
};

export default ModalContent;
