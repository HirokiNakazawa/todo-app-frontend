import { Drawer, Toolbar, Box } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, categoryState, loginState } from "../recoil/UserState";
import { useApi } from "../hooks/useApi";
import AddCategoryForm from "./AddCategoryForm";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  const user = useRecoilValue(userState);
  const isLoggedIn = useRecoilValue(loginState);
  const setCategories = useSetRecoilState(categoryState);

  const [isMounted, setIsMounted] = useState(false);

  const api = useApi();

  const drawerWidth = 300;

  const updateUserCategories = useCallback(async () => {
    try {
      const response = await api.getUserCategories(user.id);
      console.log(response);
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  }, [api, user.id, setCategories]);

  useEffect(() => {
    if (isLoggedIn && !isMounted) {
      updateUserCategories();
      setIsMounted(true);
    }
  }, [isLoggedIn, isMounted, updateUserCategories]);

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
        <AddCategoryForm
          onUpdate={updateUserCategories}
          drawerWidth={drawerWidth}
        />
        <CategoryList />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
