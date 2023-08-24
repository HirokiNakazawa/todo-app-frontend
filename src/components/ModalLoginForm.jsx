import { useAuthentication } from "../hooks/useAuthentication";
import ModalAuthContent from "./ModalAuthContent";
import ModalFooter from "./ModalFooter";

const ModalLoginForm = () => {
  const authentication = useAuthentication();

  const handleSubmit = async () => {
    console.log("ログインボタンがクリックされました");
    await authentication.login();
  };

  return (
    <>
      <ModalAuthContent />
      <ModalFooter handleSubmit={handleSubmit} />
    </>
  );
};

export default ModalLoginForm;
