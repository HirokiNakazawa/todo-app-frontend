import { useAuthentication } from "../hooks/useAuthentication";
import ModalAuthContent from "./ModalAuthContent";
import ModalFooter from "./ModalFooter";

const ModalRegisterForm = () => {
  const authentication = useAuthentication();

  const handleSubmit = async () => {
    console.log("登録ボタンがクリックされました");
    await authentication.register();
  };

  return (
    <>
      <ModalAuthContent />
      <ModalFooter handleSubmit={handleSubmit} />
    </>
  );
};

export default ModalRegisterForm;
