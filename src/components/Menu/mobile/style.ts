import styled from "styled-components";

//SIDEMENU BODY
export const MenuContainer = styled.div`
  width: 50px;
  height: 50px;
  z-index: 1;

  position: absolute;
  inset: 0;

  .logoContainer {
    padding: min(10vh, 1.5rem) 2rem;
    img {
      width: 100px;
      height: 100px;
      margin: 20px 0;
    }
  }
  a {
    color: var(--primary-light);
  }

  .navbar {
    padding: 15px;
    font-size: 2rem;
    a {
      color: var(--contrast);
    }
  }
  .navopen {
    display: block;
  }

  .nav-menu {
    width: 180px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    background-color: var(--second-dark);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.31));

    li {
      list-style: none;
    }

    position: fixed;
    top: 0;
    left: -200%;
    transition: 850ms;
  }
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .navbar-toggle {
    position: absolute;
    padding: 0.5rem;
    font-size: 2rem;
    top: 0;
    left: 4em;
    a {
      color: var(--contrast);
    }
  }
  .nav-text {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 8px 0px 8px 0px;

    a {
      width: 95%;
      height: 100%;
      text-decoration: none;
      font-size: 1.15rem;

      display: flex;
      align-items: center;

      padding: 0 20px;
      svg {
        margin-right: 20px;
        width: 24px;
        height: 24px;
      }
    }
    :hover {
      background-color: var(--hover);
      a {
        color: var(--contrast);
      }
    }
  }
  .nav-menu-items {
    width: 100%;
  }
  @media (min-width: 760px) {
    .menu-bar {
      font-size: 3rem;
      padding: 0;
      margin: 0;
      svg {
        margin-top: 1rem;
      }
    }
    .navbar-toggle {
      /* left: 5em; */
      display: none;
    }
    .nav-menu {
      left: -200%;
      width: 250px;
      ul {
        align-self: center;
      }
    }
    .navbar {
      position: relative;
      padding: 0;
      top: 0;
      left: 20px;
    }
    .nav-menu-items {
      a {
        margin-left: 40px;
        font-size: 1.3rem;
      }
    }
    .logoContainer {
      margin-left: 40px;
      img {
        margin: 40px 5px;
      }
    }
  }
`;
