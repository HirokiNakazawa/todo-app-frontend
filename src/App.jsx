import Header from "./components/Header";
import Body from "./components/Body";
import AuthProvider from "./provider/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Body />
      </AuthProvider>
    </>
  );
};

export default App;
