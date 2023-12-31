import { useSetRecoilState, useRecoilValue } from "recoil";
import { nameState, passwordState } from "../recoil/AuthState";
import { modalState } from "../recoil/ModalState";
import { userState } from "../recoil/UserState";
import { useApi } from "./useApi";
import { useUpdate } from "./useUpdate";
import { useCloseModal } from "./useCloseModal";

const useAuthentication = () => {
  const name = useRecoilValue(nameState);
  const password = useRecoilValue(passwordState);
  const setModal = useSetRecoilState(modalState);
  const setUser = useSetRecoilState(userState);

  const api = useApi();
  const closeModal = useCloseModal();
  const update = useUpdate();

  // ユーザー新規登録
  const register = async () => {
    const data = { name, password };
    try {
      const response = await api.postRegister(data);
      console.log(response);
      await handleAuthentication(response);
      closeModal.closeModal();
    } catch (error) {
      console.log(error);
      setModal({ errorMsg: "ユーザー登録に失敗しました" });
    }
  };

  // ログイン
  const login = async () => {
    const data = { name, password };
    try {
      const response = await api.postLogin(data);
      console.log(response);
      await handleAuthentication(response);
      closeModal.closeModal();
    } catch (error) {
      console.log(error);
      setModal({ errorMsg: "ログインに失敗しました" });
    }
  };

  // 認証完了後の処理
  const handleAuthentication = async (response) => {
    setUser({
      id: response.id,
      name: response.name,
      isLoggedin: true,
    });
    await update.updateCategories(response.id);
    await update.updateTodos(response.id);
  };

  return { register, login };
};

export { useAuthentication };
