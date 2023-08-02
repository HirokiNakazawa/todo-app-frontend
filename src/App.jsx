import { RecoilRoot } from "recoil";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header />
          <Body />
        </Box>
      </RecoilRoot>
    </>
  );
};

export default App;
