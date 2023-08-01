import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../recoil/UserState";

const CategoryList = () => {
  const categories = useRecoilValue(categoriesState);

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
      {categories.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton>
            <ListItemText secondary={item.category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
