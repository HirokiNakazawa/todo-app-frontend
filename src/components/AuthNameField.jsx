import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { nameState } from "../recoil/AuthState";

const AuthNameField = () => {
  const [name, setName] = useRecoilState(nameState);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <TextField
      label="名前"
      name="name"
      value={name}
      onChange={handleNameChange}
      required
    />
  );
};

export default AuthNameField;
