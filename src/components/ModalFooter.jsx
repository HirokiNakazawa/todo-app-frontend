import { Box, Button } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalState,
  nameState,
  passwordState,
  errorMsgState,
} from "../recoil/ModalState";
import { loginState, userState } from "../recoil/UserState";
import { useApi } from "../hooks/useApi";

const ModalFooter = () => {
  // モーダルに関する状態変数
  const [modal, setModal] = useRecoilState(modalState);
  const name = useRecoilValue(nameState);
  const password = useRecoilValue(passwordState);
  const setErrorMsg = useSetRecoilState(errorMsgState);

  // ユーザー情報に関する状態変数
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(loginState);

  // カスタムフック呼び出し
  const api = useApi();

  // 送信ボタンがクリックされた時の処理
  const handleSubmit = async () => {
    // ユーザー新規登録
    if (modal.isRegister) {
      console.log("登録ボタンがクリックされました");
      const data = { name, password };
      try {
        const response = await api.postRegister(data);
        console.log(response);
        handleAuthentication(response);
      } catch (error) {
        console.log(error);
        setErrorMsg("ユーザー登録に失敗しました");
      }
    }

    // ログイン
    if (modal.isLogin) {
      console.log("ログインボタンがクリックされました");
      const data = { name, password };
      try {
        const response = await api.postLogin(data);
        console.log(response);
        setUser({
          id: response.id,
          name: response.name,
        });
        handleAuthentication(response);
      } catch (error) {
        console.log(error);
        setErrorMsg("ログインに失敗しました");
      }
    }
  };

  // 認証が完了した後の処理
  const handleAuthentication = (response) => {
    setUser({
      id: response.id,
      name: response.name,
    });
    setIsLoggedIn(true);
    handleCloseModal();
  };

  // モーダルを閉じる処理
  const handleCloseModal = () => {
    console.log("モーダルを閉じます");
    setModal({
      isOpen: false,
      isRegister: false,
      isLogin: false,
      title: "",
      buttonText: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        p: 2,
        gap: 2,
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        {modal.buttonText}
      </Button>
      <Button onClick={handleCloseModal} variant="contained" mt={3}>
        閉じる
      </Button>
    </Box>
  );
};

export default ModalFooter;
