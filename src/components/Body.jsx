import { useRecoilValue } from "recoil";
import { userState } from "../recoil/UserState";
import Sidebar from "./Sidebar";
import CustomModal from "./CustomModal";
import MainContent from "./MainContent";

const Body = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <CustomModal />
      {user.isLoggedin ? (
        <>
          <Sidebar />
          <MainContent />
        </>
      ) : null}
    </>
  );
};

export default Body;
