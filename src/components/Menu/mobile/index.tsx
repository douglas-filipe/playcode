import { MenuContainer } from "./style";
import logo from "../../../assets/img/logo.png";
import * as Icon from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiGroup } from "react-icons/bi";

export const MenuMobile = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showMenu = () => setSidebar(!sidebar);

  return (
    <MenuContainer>
      <div className={!sidebar ? "navbar navopen" : "navbar"}>
        <Link to="#" className="menu-bar">
          <Icon.AiOutlineAppstore className="mobileIcon" onClick={showMenu} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <span className="logoContainer">
            <img src={logo} alt="Logo" />
          </span>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <Icon.AiOutlineClose onClick={showMenu} />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">
              <Icon.AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="#">
              <Icon.AiFillFire />
              <span>Em alta</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/recents">
              <FaHistory />
              <span>Recentes</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/profile">
              <VscAccount />
              <span>Profile</span>
            </Link>
          </li>

          <li className="nav-text">
            <Link to="#">
              <BiGroup />
              <span>Grupos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
};
