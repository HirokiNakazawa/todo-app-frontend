import { usePost } from "../hooks/usePost";
import ModalFooter from "./ModalFooter";
import ModalTodoContent from "./ModalTodoContent";

const ModalUpdateForm = () => {
  const post = usePost();

  const handleSubmit = async () => {
    console.log("TODO編集ボタンがクリックされました");
    await post.updateTodo();
  };

  return (
    <>
      <ModalTodoContent />
      <ModalFooter handleSubmit={handleSubmit} />
    </>
  );
};

export default ModalUpdateForm;
