import { AppBar, Toolbar, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/UserState";
import { APP_NAME } from "../config/config";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {APP_NAME}
        </Typography>
        {user.isLoggedin ? (
          <>
            <Typography>{user.name}ログイン中</Typography>
            <LogoutButton />
          </>
        ) : (
          <>
            <RegisterButton />
            <LoginButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
