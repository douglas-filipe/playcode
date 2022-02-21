
export const Home = () => {
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
        <div className="login-model">
          <MdAccountCircle className="user-icon" />
          <span>User</span>
          <Icons.FiChevronDown />
        </div>
        <div className="content-boxI">content I</div>
        <div className="content-boxII">content II</div>
      </div>
    </Container>

  );
};
