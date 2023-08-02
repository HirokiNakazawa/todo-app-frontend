import { useSetRecoilState, useRecoilValue } from "recoil";
import { errorMsgState, nameState, passwordState } from "../recoil/ModalState";
import { loginState, userState } from "../recoil/UserState";
import { useApi } from "./useApi";

const useAuthentication = (onClose) => {
  const name = useRecoilValue(nameState);
  const password = useRecoilValue(passwordState);
  const setErrorMsg = useSetRecoilState(errorMsgState);
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(loginState);

  const api = useApi();

  const register = async () => {
    const data = { name, password };
    try {
      const response = await api.postRegister(data);
      console.log(response);
      await handleAuthentication(response);
      onClose();
    } catch (error) {
      console.log(error);
      setErrorMsg("ユーザー登録に失敗しました");
    }
  };

  const login = async () => {
    const data = { name, password };
    try {
      const response = await api.postLogin(data);
      console.log(response);
      await handleAuthentication(response);
      onClose();
    } catch (error) {
      console.log(error);
      setErrorMsg("ログインに失敗しました");
    }
  };

  const handleAuthentication = async (response) => {
    setUser({
      id: response.id,
      name: response.name,
    });
    setIsLoggedIn(true);
  };

  return { register, login, handleAuthentication };
};

export { useAuthentication };
