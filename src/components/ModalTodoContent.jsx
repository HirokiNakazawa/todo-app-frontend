import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import { useRecoilState } from "recoil";
import { categoryState, limitDateState, todoState } from "../recoil/ModalState";
import { categoriesState } from "../recoil/UserState";

const ModalTodoContent = () => {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [todo, setTodo] = useRecoilState(todoState);
  const [limitDate, setLimitDate] = useRecoilState(limitDateState);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDateChange = (date) => {
    setLimitDate(date);
  };

  return (
    <FormControl fullWidth>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
        }}
      >
        <FormControl>
          <InputLabel id="select-category-label">カテゴリ</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={category}
            label="カテゴリ"
            onChange={handleCategoryChange}
          >
            {categories.map((item) => (
              <MenuItem key={item.id} value={item.category}>
                {item.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="TODO"
          name="todo"
          value={todo}
          onChange={handleTodoChange}
          required
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <DatePicker
            label="期限"
            name="limitDate"
            value={limitDate}
            onChange={handleDateChange}
            slotProps={{ textField: { variant: "outlined" } }}
          />
        </LocalizationProvider>
      </Box>
    </FormControl>
  );
};

export default ModalTodoContent;
