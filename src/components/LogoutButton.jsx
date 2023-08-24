import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/UserState";
import { LOGOUT_BUTTON } from "../config/config";

const LogoutButton = () => {
  const setUser = useSetRecoilState(userState);

  const handleLogout = () => {
    console.log("ログアウトボタンをクリックしました");
    setUser({
      id: null,
      name: "",
      isLoggedin: false,
    });
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      {LOGOUT_BUTTON}
    </Button>
  );
};

export default LogoutButton;
