import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import DeleteTodoButton from "./DeleteTodoButton";
import UpdateStatusButton from "./UpdateStatusButton";
import UpdateTodoButton from "./UpdateTodoButton";

const TodoTable = (props) => {
  const { status, todos } = props;
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography>・{status}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">カテゴリ</TableCell>
              <TableCell align="center">タスク名</TableCell>
              <TableCell align="center">期限</TableCell>
              <TableCell align="center">状態</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((item) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTable;
