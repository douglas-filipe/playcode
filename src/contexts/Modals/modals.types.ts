export interface IModalsProviderData {
  openUserMenu: boolean;
  setOpenUserMenu: (openUserMenu: boolean) => void;
  openModalLogin: boolean;
  setOpenModalLogin: (openModalLogin: boolean) => void;
  openModalSignup: boolean;
  setOpenModalSignup: (openModalSignup: boolean) => void;
}
