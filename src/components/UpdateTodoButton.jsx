import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { modalState } from "../recoil/ModalState";
import dayjs from "dayjs";
import {
  mainCategoryState,
  todoState,
  limitDateState,
  todoIdState,
} from "../recoil/MainState";

const UpdateTodoButton = ({ todo }) => {
  const setTodoId = useSetRecoilState(todoIdState);
  const setMainCategory = useSetRecoilState(mainCategoryState);
  const setTodo = useSetRecoilState(todoState);
  const setLimitDate = useSetRecoilState(limitDateState);
  const setModal = useSetRecoilState(modalState);

  const handleOpenUpdateModal = () => {
    console.log("タスク編集ボタンをクリックしました");
    setTodoId(todo.id);
    setMainCategory(todo.category_name);
    setTodo(todo.todo);
    setLimitDate(todo.limit_date ? dayjs(todo.limit_date).toDate() : null);

    setModal({
      isOpen: true,
      isUpdate: true,
      title: "TODO編集",
      buttonText: "更新",
    });
  };

  return (
    <Button variant="outlined" color="info" onClick={handleOpenUpdateModal}>
      編集
    </Button>
  );
};

export default UpdateTodoButton;
