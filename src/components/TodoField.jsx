import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/MainState";

const TodoField = () => {
  const [todo, setTodo] = useRecoilState(todoState);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <TextField
      label="TODO"
      name="todo"
      value={todo}
      onChange={handleTodoChange}
      required
    />
  );
};

export default TodoField;
