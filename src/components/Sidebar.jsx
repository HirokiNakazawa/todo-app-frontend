import {
  Drawer,
  Toolbar,
  Box,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Sidebar = () => {
  const { userId, isLoggedIn, categories, setCategories } =
    useContext(AuthContext);

  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [category, setCategory] = useState("");

  const drawerWidth = 300;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    postCategory();
  };

  const getCategories = useCallback(async () => {
    try {
      const url = "http://todo-app-api/api/categories/" + userId;

      const response = await axios.get(url);
      console.log(response.data);

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId, setCategories]);

  const postCategory = async () => {
    try {
      const url = "http://todo-app-api/api/categories/create";
      const data = {
        user_id: userId,
        category: category,
      };

      const response = await axios.post(url, data);

      console.log(response);
      getCategories(userId);
      setCategory("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !hasLoggedIn) {
      getCategories();
      setHasLoggedIn(true);
    }
  }, [isLoggedIn, hasLoggedIn, getCategories]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {isLoggedIn ? (
            <div>
              <FormControl>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: "1px solid gray",
                    p: 2,
                    gap: 2,
                    width: drawerWidth,
                  }}
                >
                  <Typography variant="p">カテゴリ追加</Typography>
                  <TextField
                    label="カテゴリ"
                    name="カテゴリ"
                    value={category}
                    onChange={handleCategoryChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    追加
                  </Button>
                </Box>
              </FormControl>
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
            </div>
          ) : null}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
