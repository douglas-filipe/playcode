import { SideMenu } from "../../components/Menu";
import { Container } from "../../styles";
export const Home = () => {
  return (
    <Container>
      <div className="side-menu">
        <SideMenu />
      </div>

      <div className="main-box">
        <div className="search">search</div>
        <div className="login-model">login</div>
        <div className="content-boxI">content I</div>
        <div className="content-boxII">content II</div>
      </div>
    </Container>
  );
};
