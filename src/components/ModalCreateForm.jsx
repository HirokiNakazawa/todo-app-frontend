import { usePost } from "../hooks/usePost";
import ModalFooter from "./ModalFooter";
import ModalTodoContent from "./ModalTodoContent";

const ModalCreateForm = () => {
  const post = usePost();

  const handleSubmit = async () => {
    console.log("TODO作成ボタンがクリックされました");
    await post.createTodo();
  };

  return (
    <>
      <ModalTodoContent />
      <ModalFooter handleSubmit={handleSubmit} />
    </>
  );
};

export default ModalCreateForm;
