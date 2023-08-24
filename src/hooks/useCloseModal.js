import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import { sidebarState } from "../recoil/SidebarState";
import { nameState, passwordState } from "../recoil/AuthState";
import {
  limitDateState,
  mainCategoryState,
  todoState,
} from "../recoil/MainState";

const useCloseModal = () => {
  const setModal = useSetRecoilState(modalState);
  const setSidebar = useSetRecoilState(sidebarState);
  const setName = useSetRecoilState(nameState);
  const setPassword = useSetRecoilState(passwordState);
  const setMainCategory = useSetRecoilState(mainCategoryState);
  const setTodo = useSetRecoilState(todoState);
  const setLimitDate = useSetRecoilState(limitDateState);

  const closeModal = () => {
    console.log("モーダルを閉じます");
    setModal({
      isOpen: false,
      isRegister: false,
      isLogin: false,
      isCreate: false,
      isUpdate: false,
      title: "",
      buttonText: "",
      errorMsg: "",
    });
    setSidebar({ errorMsg: "" });
    setName("");
    setPassword("");
    setMainCategory("");
    setTodo("");
    setLimitDate(null);
  };

  return { closeModal };
};

export { useCloseModal };
