import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";
import AuthProvider from "./provider/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header />
          <Body />
        </Box>
      </AuthProvider>
    </>
  );
};

export default App;
