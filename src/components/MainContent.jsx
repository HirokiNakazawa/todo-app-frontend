import { Box, Toolbar, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { currentCategoryState } from "../recoil/UserState";
import AddTodoForm from "./AddTodoForm";
import TodoTable from "./TodoTable";

const MainContent = (props) => {
  const { inCompletedTodos, completedTodos } = props;
  const currentCategory = useRecoilValue(currentCategoryState);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2 }}
      component="main"
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography>カテゴリ：{currentCategory.name}</Typography>
        <AddTodoForm />
      </Box>
      <TodoTable status="未完了" todos={inCompletedTodos} />
      <TodoTable status="完了" todos={completedTodos} />
    </Box>
  );
};

export default MainContent;
