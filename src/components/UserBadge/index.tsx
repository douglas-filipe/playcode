import { UserModal } from "../UserModal";
import * as Icons from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { BadgeMenu } from "./userbadge.types";
import { Container } from "./style";

export const UserBadge = ({
  setOpenUserMenu,
  openUserMenu,
  className,
}: BadgeMenu) => {
  const username = localStorage.getItem("@playcode/username");

  return (
    <Container
      className={className}
      onClick={() => setOpenUserMenu(!openUserMenu)}
    >
      <MdAccountCircle className="user-icon" />
      {username ? <span>{username}</span> : <span>Login</span>}
      <Icons.FiChevronDown />
      <UserModal />
    </Container>
  );
};
