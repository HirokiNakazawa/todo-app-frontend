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
import TodoTableRow from "./TodoTableRow";

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
              <TableCell align="center" width={400}>
                タスク名
              </TableCell>
              <TableCell align="center">期限</TableCell>
              <TableCell align="center">状態</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TodoTableRow todos={todos} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTable;
