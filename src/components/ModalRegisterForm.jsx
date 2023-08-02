import { useAuthentication } from "../hooks/useAuthentication";
import ModalAuthContent from "./ModalAuthContent";
import ModalFooter from "./ModalFooter";

const ModalRegisterForm = ({ onClose }) => {
  const authentication = useAuthentication(onClose);

  const handleSubmit = async () => {
    console.log("登録ボタンがクリックされました");
    await authentication.register();
  };

  return (
    <>
      <ModalAuthContent />
      <ModalFooter handleSubmit={handleSubmit} onClose={onClose} />
    </>
  );
};

export default ModalRegisterForm;
