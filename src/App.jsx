import { RecoilRoot } from "recoil";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";
import AuthProvider from "./provider/AuthProvider";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <AuthProvider>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />
            <Body />
          </Box>
        </AuthProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
