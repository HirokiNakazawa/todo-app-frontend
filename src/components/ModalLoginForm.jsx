import { useAuthentication } from "../hooks/useAuthentication";
import ModalAuthContent from "./ModalAuthContent";
import ModalFooter from "./ModalFooter";

const ModalLoginForm = ({ onClose }) => {
  const authentication = useAuthentication(onClose);

  const handleSubmit = async () => {
    console.log("ログインボタンがクリックされました");
    await authentication.login();
  };

  return (
    <>
      <ModalAuthContent />
      <ModalFooter handleSubmit={handleSubmit} onClose={onClose} />
    </>
  );
};

export default ModalLoginForm;
