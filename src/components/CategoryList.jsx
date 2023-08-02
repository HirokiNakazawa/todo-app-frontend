import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, currentCategoryState } from "../recoil/UserState";

const CategoryList = () => {
  const categories = useRecoilValue(categoriesState);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);

  const handleChoseAll = () => {
    setCurrentCategory({
      id: null,
      name: "全て",
    });
  };

  const handleChoseCategory = (item) => {
    setCurrentCategory({
      id: item.id,
      name: item.category,
    });
  };

  return (
    <List>
      <ListItem>
        <ListItemText primary="カテゴリ一覧" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleChoseAll}>
          <ListItemText secondary="全て" />
        </ListItemButton>
      </ListItem>
      {categories.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleChoseCategory(item)}>
            <ListItemText secondary={item.category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
