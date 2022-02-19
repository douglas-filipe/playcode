import styled from "styled-components";

//HOME PAGE BODY
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--backgroud-color);
  color: var(--primary-light);
`;

//SIDEMENU BODY
export const MenuContainer = styled.div`
  position: fixed;
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
    padding: 1rem;
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
  @media (min-width: 35em) {
    .nav-menu {
      left: 0%;
      width: 250px;
    }
    .nav-menu-items {
      a {
        margin-left: 40px;
        font-size: 1.3rem;
      }
    }
    .logoContainer {
      margin-left: 40px;
    }
    .navbar {
      display: none;
    }
    .navbar-toggle {
      display: none;
    }
  }
`;
