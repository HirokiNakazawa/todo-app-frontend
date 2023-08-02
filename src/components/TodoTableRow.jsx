import { Box, TableRow, TableCell } from "@mui/material";
import { useRecoilValue } from "recoil";
import { currentCategoryState } from "../recoil/UserState";
import dayjs from "dayjs";
import UpdateStatusButton from "./UpdateStatusButton";
import UpdateTodoButton from "./UpdateTodoButton";
import DeleteTodoButton from "./DeleteTodoButton";

const TodoTableRow = ({ todos }) => {
  const currentCategory = useRecoilValue(currentCategoryState);

  return (
    <>
      {todos.map((item) =>
        currentCategory.id === null ||
        item.category_id === currentCategory.id ? (
          <TableRow key={item.id}>
            <TableCell align="center">{item.category_name}</TableCell>
            <TableCell>{item.todo}</TableCell>
            <TableCell align="center">
              {item.limit_date
                ? dayjs(item.limit_date).format("YYYY/MM/DD")
                : "期限なし"}
            </TableCell>
            <TableCell align="center">
              <UpdateStatusButton todo={item} />
            </TableCell>
            <TableCell>
              <Box sx={{ display: "flex", gap: 2 }}>
                <UpdateTodoButton todo={item} />
                <DeleteTodoButton todo={item} />
              </Box>
            </TableCell>
          </TableRow>
        ) : null
      )}
    </>
  );
};

export default TodoTableRow;
