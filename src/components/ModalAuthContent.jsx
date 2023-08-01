import { Box, FormControl, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { nameState, passwordState } from "../recoil/ModalState";

const ModalAuthContent = () => {
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="名前"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <TextField
          label="パスワード"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Box>
    </FormControl>
  );
};

export default ModalAuthContent;
