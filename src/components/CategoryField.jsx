import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { sidebarCategoryState } from "../recoil/SidebarState";

const CategoryField = () => {
  const [sidebarCategory, setSidebarCategory] =
    useRecoilState(sidebarCategoryState);

  const handleCategoryChange = (e) => {
    setSidebarCategory(e.target.value);
  };

  return (
    <TextField
      label="カテゴリ"
      name="カテゴリ"
      value={sidebarCategory}
      onChange={handleCategoryChange}
      required
    />
  );
};

export default CategoryField;
