import { usePost } from "../hooks/usePost";
import ModalFooter from "./ModalFooter";
import ModalTodoContent from "./ModalTodoContent";

const ModalUpdateForm = ({ onClose }) => {
  const post = usePost(onClose);

  const handleSubmit = async () => {
    console.log("TODO編集ボタンがクリックされました");
    await post.updateTodo();
  };

  return (
    <>
      <ModalTodoContent />
      <ModalFooter handleSubmit={handleSubmit} onClose={onClose} />
    </>
  );
};

export default ModalUpdateForm;
