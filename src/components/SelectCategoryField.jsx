import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainCategoryState } from "../recoil/MainState";
import { userCategoriesState } from "../recoil/UserState";

const SelectCategoryField = () => {
  const userCategories = useRecoilValue(userCategoriesState);
  const [mainCategory, setMainCategory] = useRecoilState(mainCategoryState);

  const handleCategoryChange = (e) => {
    setMainCategory(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="select-category-label">カテゴリ</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={mainCategory}
        label="カテゴリ"
        onChange={handleCategoryChange}
      >
        {userCategories.map((item) => (
          <MenuItem key={item.id} value={item.category}>
            {item.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategoryField;
