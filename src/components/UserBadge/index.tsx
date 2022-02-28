import { UserModal } from "../UserModal";
import * as Icons from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { BadgeMenu } from "./userbadge.types";
import { Container } from "./style";
import { useUserInfo } from "../../contexts/User";

export const UserBadge = ({
  setOpenUserMenu,
  openUserMenu,
  className,
}: BadgeMenu) => {
  const { userData } = useUserInfo();

  const username = userData.name || "Login";

  return (
    <Container
      className={className}
      onClick={() => setOpenUserMenu(!openUserMenu)}
    >
      <MdAccountCircle className="user-icon" />
      <span>{username}</span>
      <Icons.FiChevronDown />
      <UserModal />
    </Container>
  );
};
