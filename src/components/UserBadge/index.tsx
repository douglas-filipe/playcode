import { UserModal } from "../UserModal";
import * as Icons from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { BadgeMenu } from "./userbadge.types";

export const UserBadge = ({ setOpenUserMenu, openUserMenu }: BadgeMenu) => {
  return (
    <div className="login-model" onClick={() => setOpenUserMenu(!openUserMenu)}>
      <MdAccountCircle className="user-icon" />

      <span>Login</span>
      <Icons.FiChevronDown />
      <UserModal />
    </div>
  );
};
