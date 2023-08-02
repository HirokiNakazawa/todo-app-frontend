import { usePost } from "../hooks/usePost";
import ModalFooter from "./ModalFooter";
import ModalTodoContent from "./ModalTodoContent";

const ModalCreateForm = ({ onClose }) => {
  const post = usePost(onClose);

  const handleSubmit = async () => {
    console.log("TODO作成ボタンがクリックされました");
    await post.createTodo();
  };

  return (
    <>
      <ModalTodoContent />
      <ModalFooter handleSubmit={handleSubmit} onClose={onClose} />
    </>
  );
};

export default ModalCreateForm;
