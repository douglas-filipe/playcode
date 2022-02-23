import { SideMenu } from "../../components/Menu";
import { Container, InputBox, InputField } from "./style";
import * as Icons from "react-icons/fi";
import { useModals } from "../../contexts/Modals";
import { UserBadge } from "../../components/UserBadge";

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
          <UserBadge
            setOpenUserMenu={setOpenUserMenu}
            openUserMenu={openUserMenu}
          />
        ) : (
          <UserBadge
            setOpenUserMenu={setOpenUserMenu}
            openUserMenu={openUserMenu}
          />
        )}

        <div className="content-boxI">
          <span>Em alta</span>
          <Icons.FiChevronDown />
        </div>
        <div className="content-boxII">
          <span>Recentes</span>
          <Icons.FiChevronDown />
        </div>
      </div>
    </Container>
  );
};
