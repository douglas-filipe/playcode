import { SideMenu } from "../../components/Menu";
import { Container, InputBox, InputField } from "../../styles";
import * as Icons from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { UserModal } from "../../components/UserModal";
import { useModals } from "../../contexts/Modals";

export const Home = () => {
  const { setOpenUserMenu, openUserMenu } = useModals();
  return (
    <Container>
      <div className="side-menu">
        <SideMenu />
      </div>

      <div className="main-box">
        <div className="search">
          <InputBox>
            <InputField placeholder="Pesquise aqui" />
            <div className="icon">
              <Icons.FiSearch />
            </div>
          </InputBox>
        </div>
        {openUserMenu ? (
          <div className="login-model" onClick={() => setOpenUserMenu(false)}>
            <MdAccountCircle className="user-icon" />
            <span>User</span>
            <Icons.FiChevronDown />
            <UserModal />
          </div>
        ) : (
          <div className="login-model" onClick={() => setOpenUserMenu(true)}>
            <MdAccountCircle className="user-icon" />
            <span>User</span>
            <Icons.FiChevronDown />
            <UserModal />
          </div>
        )}

        <div className="content-boxI">content I</div>
        <div className="content-boxII">content II</div>
      </div>
    </Container>
  );
};
