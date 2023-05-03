import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { studentLogInAPI } from "../actions";

const Landing = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    props.logIn({ email, password });
    console.log(props.user);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {props.user && navigate("/home")}
      <Nav>
        <a href="/">
          <img src="/images/skillup.svg" alt="" />
        </a>
        <div>
          <div>
            <a href="">
              <img src="/images/education.svg" alt="" />
              <span>
                Capacitaciones<div></div>
              </span>
            </a>
          </div>
          <div>
            <a href="">
              <img src="/images/portfolio.svg" alt="" />
              <span>Pasantías</span>
            </a>
          </div>
          <div>
            <a href="/sign-up">
              <img src="/images/registration.svg" alt="" />
              <span>Registrarse</span>
            </a>
          </div>
        </div>
        {/* <LogIn href="/">Ingresar</LogIn>
         */}
      </Nav>
      <Section>
        <Hero>
          <h1>Bienvenido a la mejor comunidad profesional para estudiantes</h1>
          <img src="/images/hero.svg" alt="" />
        </Hero>
        <Form>
          <InputWrapper>
            <InputLabel>Correo electrónico</InputLabel>
            <InputField>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </InputField>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Contraseña</InputLabel>
            <InputField>
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button onClick={changeShowPassword}>
                <span>{showPassword ? "Ocultar" : "Mostrar"}</span>
              </button>
            </InputField>
          </InputWrapper>
          <ForgotPassword>
            <a href="">
              <span>¿Olvidaste tu contraseña?</span>
            </a>
          </ForgotPassword>
          <LogInHero onClick={handleLogin}>Ingresar</LogInHero>
          <Divider>
            <span>o</span>
          </Divider>
          <SignUp onClick={handleSignUp}>¿No tienes cuenta? Registrate</SignUp>
        </Form>
      </Section>
      <SecondaryHeader>
        <h2>Encuentra la pasantía o la capacitación adecuada para ti</h2>
        <img src="/images/layer1.svg" alt="" />
      </SecondaryHeader>
      <TalentFinder>
        <h2>
          Publica tus ofertas de pasantías o capacitaciones y recluta a los
          mejores talentos
        </h2>
        <img src="/images/layer2.svg" alt="" />
      </TalentFinder>
      <Leading>
        <LeadingText>
          <div>
            <h2>¿A quién se dirige SkillUp?</h2>
            <span>
              A cualquier estudiante que busque dar un paso adelante en su vida
              profesional o todos aquellos empresarios que busquen reclutar para
              preparar a nuevos talentos
            </span>
          </div>
        </LeadingText>
        <img src="/images/team-up.png" alt="" />
      </Leading>
      <JoinUs>
        ¡Únete a SkillUp con tus compañeros de clase o afilia a tu empresa!
      </JoinUs>
      <Footer>
        <img src="/images/footer.png" alt="" />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Footer = styled.footer`
  img {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Nav = styled.div`
  max-width: 100%;
  padding: 8px 300px 8px 300px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background-color: #114c5f;
  align-items: center;

  @media (max-width: 768px) {
    padding: 8px 10px;
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }

    div {
      margin-right: 100px;

      &:last-child {
        margin-right: 0%;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
          color: #f2e6cf;
          font-weight: 600;
        }

        img {
          margin-right: 8px;
        }
      }
    }
  }
`;

// const LogIn = styled.a`
// color: #114c5f;
// border-radius: 60px;
// transition-duration: 167ms;
// font-size: 24px;
// font-weight: 600;
// line-height: 40px;
// padding: 20px 42px;
// text-align: center;
// background-color: #f2e6cf;
// text-decoration: none;
/* &:hover { */
/* background-color: rgba(112, 181, 249, 0.15); */
/* color: #0a66c2; */
/* text-decoration: none; */
/* } */
// `;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding: 30px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  padding-bottom: 130px;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    line-height: 67px;
    width: 35%;
    font-size: 42px;
    color: #8f5849;
    font-weight: 200;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    top: 30px;
    width: 776px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: 650px;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    /* margin-left: 20px; */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const InputField = styled.a`
  width: 400px;
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    height: 80%;
    width: 100%;
  }

  button {
    background: transparent;
    border: none;
    span {
      font-size: 16;
      color: #114c5f;
      padding-left: 10px;
      font-weight: 600;
    }
  }
`;

const ForgotPassword = styled.div`
  margin: 30px auto;
  margin-bottom: 45px;
  a {
    text-decoration: none;
    span {
      color: #114c5f;
      font-weight: 600;
    }
  }
`;

const LogInHero = styled.button`
  background-color: #114c5f;
  padding: 20px 170px;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 600;
  border: none;
  font-size: 16px;
`;
const SignUp = styled(LogInHero)`
  background: transparent;
  border: 1px solid #000;
  color: #000;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.75);
  padding: 15px 90px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  span {
    display: flex;
    flex: 1;
    height: 0;
    margin: 0 20px;
    align-items: center;
    &:before,
    &:after {
      content: "";
      flex: 1 1;
      border-bottom: 2px solid #ccc;
    }
  }
  span:before {
    margin-right: 10px;
  }
  span:after {
    margin-left: 10px;
  }
`;

const SecondaryHeader = styled.div`
  max-width: 100%;
  padding: 8px 300px 8px 300px;
  height: 414px;
  background: #f3f2f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
    position: relative;
    flex-wrap: wrap;
    margin: auto;
  }
  h2 {
    padding-bottom: 0;
    line-height: 67px;
    width: 50%;
    font-size: 48px;
    color: #000;
    font-weight: 200;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    @media (max-width: 768px) {
      width: initial;
      position: initial;
      height: initial;
      margin: -25px auto;
    }
  }
`;

const TalentFinder = styled(SecondaryHeader)`
  background: #f2e6cf;
  height: 312px;
  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
  h2 {
    font-size: 40px;
    color: #114c5f;
    width: 55%;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
`;

const Leading = styled.div`
  margin-top: 100px;
  height: 800px;
  display: flex;
  img {
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    height: 600px;
    img {
      margin: 0;
      height: 500px;
    }
  }
`;

const LeadingText = styled.div`
  margin-top: 50px;
  background: #f3f2f0;
  max-width: 50%;
  height: 720px;
  div {
    width: 100%;
    display: inline-block;
    align-items: end;
    margin-left: 200px;
    margin-top: 100px;
    width: 60%;
  }
  h2,
  span {
    font-size: 40px;
    color: #114c5f;
    font-weight: 200;
  }
  span {
    color: #000;
    margin-top: 2em;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const JoinUs = styled.h2`
  font-size: 56px;
  margin-left: 200px;
  width: 55%;
  margin-bottom: 50px;
  font-weight: 200;
  @media (max-width: 768px) {
    margin: auto;
    text-align: center;
    font-size: 40px;
    padding-bottom: 100px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(studentLogInAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
