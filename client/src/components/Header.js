import styled from "styled-components";
import { signOutAPI } from "../actions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="/images/header-logo.svg" alt="" />
          </a>
        </Logo>
        {/* <Search>
          <div>
            <input type="text" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search> */}
        <Nav>
          <NavListWrap>
            <NavList className={props.tab === "Trainings" ? "active" : null}>
              <a href="/trainings">
                <img src="/images/education.svg" alt="" />
                <span>Capacitaciones</span>
              </a>
            </NavList>
            <NavList className={props.tab === "Jobs" ? "active" : null}>
              <a href="/jobs">
                <img src="/images/portfolio.svg" alt="" />
                <span>Empleos</span>
              </a>
            </NavList>
            {/* <NavList>
              <a>
                <img src="/images/bell.svg" alt="" />
                <span>Notificaciones</span>
              </a>
            </NavList> */}
            <User>
              <a>
                {props.user && props.user.profile_pic ? (
                  <img src={props.user.profile_pic} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  Mi perfil
                  {/* <img src="/images/down-icon.svg" alt="" /> */}
                </span>
              </a>
              <SignOut onClick={() => props.signOut() && navigate("/")}>
                <a>Cerrar sesión</a>
              </SignOut>
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #114c5f;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  /* height: 55px; */
  /* width: 55px; */
  margin-right: 10px;
`;

const Search = styled.div`
  opacity: 92;
  position: relative;
  & > div {
    width: 387px;
    /* max-width: 387px; */
    input {
      border: none;
      box-shadow: none;
      background-color: #f2e6cf;
      border-radius: 9px;
      color: rgba(0, 0, 0, 0.9);
      width: 100%;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 47px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: -170px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  align-content: space-between;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;

  li:not(:last-child) {
    margin-right: 2em;
  }

  background: #114c5f;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid #f2e6cf;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: #f2e6cf;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: #fff;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: #114c5f;
  color: #f2e6cf;
  border: 2px solid #f2e6cf;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  &:hover {
    color: white;
  }
`;

const User = styled(NavList)`
  a > svg,
  img {
    width: 37px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
