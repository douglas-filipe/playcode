import { RoutesMain } from "./routes";
import { GlobalStyle } from "./global";
import { LoginModal } from "./components/LoginModal";
import { ToastContainer } from "react-toastify";
import { SignupModal } from "./components/SignupModal";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer />
      <SignupModal />
      <LoginModal />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
};

export default App;
