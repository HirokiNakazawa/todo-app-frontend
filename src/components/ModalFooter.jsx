import { Box, Button } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalState,
  nameState,
  passwordState,
  errorMsgState,
  categoryState,
  todoState,
  limitDateState,
  todoIdState,
} from "../recoil/ModalState";
import { categoriesState, loginState, userState } from "../recoil/UserState";
import {
  addTodoState,
  postErrorMsgState,
  updateTodoStatus,
} from "../recoil/PostState";
import { useApi } from "../hooks/useApi";
import dayjs from "dayjs";

const ModalFooter = () => {
  // モーダルに関する状態変数
  const [modal, setModal] = useRecoilState(modalState);
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [todoId, setTodoId] = useRecoilState(todoIdState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [todo, setTodo] = useRecoilState(todoState);
  const [limitDate, setLimitDate] = useRecoilState(limitDateState);
  const setErrorMsg = useSetRecoilState(errorMsgState);
  const setPostErrorMsg = useSetRecoilState(postErrorMsgState);

  // ユーザー情報に関する状態変数
  const [user, setUser] = useRecoilState(userState);
  const categories = useRecoilValue(categoriesState);
  const setIsLoggedIn = useSetRecoilState(loginState);

  // POSTリクエストに関する状態変数
  const setAddTodo = useSetRecoilState(addTodoState);
  const setUpdateTodo = useSetRecoilState(updateTodoStatus);

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

    // TODO作成
    if (modal.isCreate) {
      console.log("TODO作成ボタンがクリックされました");
      try {
        const selectedCategory = categories.find(
          (item) => item.category === category
        );
        const data = {
          user_id: user.id,
          category_id: selectedCategory.id,
          todo: todo,
          limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
          is_completed: false,
        };
        const response = await api.postTodo(data);
        console.log(response);
        setAddTodo(true);
        handleCloseModal();
      } catch (error) {
        console.log(error);
        setErrorMsg("TODO作成に失敗しました");
      }
    }

    // TODO更新
    if (modal.isUpdate) {
      console.log("TODO編集ボタンがクリックされました");
      try {
        const selectedCategory = categories.find(
          (item) => item.category === category
        );
        const data = {
          category_id: selectedCategory.id,
          todo: todo,
          limit_date: limitDate ? dayjs(limitDate).format("YYYY/MM/DD") : null,
        };
        const response = await api.updateTodo(data, todoId);
        console.log(response);
        setUpdateTodo(true);
        handleCloseModal();
      } catch (error) {
        console.log(error);
        setErrorMsg("TODO編集に失敗しました");
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
      isCreate: false,
      isUpdate: false,
      title: "",
      buttonText: "",
    });
    setErrorMsg("");
    setPostErrorMsg("");
    setName("");
    setPassword("");
    setTodoId("");
    setCategory("");
    setTodo("");
    setLimitDate(null);
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
