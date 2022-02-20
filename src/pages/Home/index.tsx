import { SideMenu } from "../../components/Menu";
import { Container, InputBox, InputField } from "../../styles";
import { FiSearch } from "react-icons/fi";

export const Home = () => {
  return (
    <Container>
      <div className="side-menu">
        <SideMenu />
      </div>

      <div className="main-box">
        <div className="search">
          <InputBox>
            <InputField />
            <div className="icon">
              <FiSearch />
            </div>
          </InputBox>
        </div>
        <div className="login-model">login</div>
        <div className="content-boxI">content I</div>
        <div className="content-boxII">content II</div>
      </div>
    </Container>
  );
};
