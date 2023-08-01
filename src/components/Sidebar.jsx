import { Drawer, Toolbar, Box } from "@mui/material";
import AddCategoryForm from "./AddCategoryForm";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  const drawerWidth = 300;

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
        <AddCategoryForm drawerWidth={drawerWidth} />
        <CategoryList />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
