import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import { categoryState } from "../recoil/UserState";

const CategoryList = () => {
  const categories = useRecoilValue(categoryState);

  return (
    <List>
      <ListItem>
        <ListItemText primary="カテゴリ一覧" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText secondary="全て" />
        </ListItemButton>
      </ListItem>
      {categories.map((category) => (
        <ListItem key={category.id} disablePadding>
          <ListItemButton>
            <ListItemText secondary={category.category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
