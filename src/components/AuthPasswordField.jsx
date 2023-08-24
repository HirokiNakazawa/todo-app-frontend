import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { passwordState } from "../recoil/AuthState";

const AuthPasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordState);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <TextField
      label="パスワード"
      name="password"
      type="password"
      value={password}
      onChange={handlePasswordChange}
      required
    />
  );
};

export default AuthPasswordField;
