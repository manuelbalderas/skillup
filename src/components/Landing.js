import styled from "styled-components";

const Landing = (props) => {
  return (
    <Container>
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
            <a href="">
              <img src="/images/registration.svg" alt="" />
              <span>Registrarse</span>
            </a>
          </div>
        </div>
        <LogIn href="/">Ingresar</LogIn>
      </Nav>
      <Section>
        <Hero>
          <h1>Bienvenido a la mejor comunidad profesional para estudiantes</h1>
          <img src="/images/hero.svg" alt="" />
        </Hero>
        <Form>
          <InputWrapper>
            <InputLabel>Correo electrónico</InputLabel>
            <EmailField>
              <input type="email"></input>
            </EmailField>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>Contraseña</InputLabel>
            <PasswordField>
              <input type="password"></input>
            </PasswordField>
          </InputWrapper>
          <ForgotPassword>
            <a href="">
              <span>¿Olvidaste tu contraseña?</span>
            </a>
          </ForgotPassword>
          <LogInHero href="">Ingresar</LogInHero>
          <Divider>
            <span>o</span>
          </Divider>
          <SignUp href="">¿No tienes cuenta? Registrate</SignUp>
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

const Footer = styled.div`
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
          font-family: Roboto Bold;
        }

        img {
          margin-right: 8px;
        }
      }
    }
  }
`;

const LogIn = styled.a`
  color: #114c5f;
  border-radius: 60px;
  transition-duration: 167ms;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  padding: 20px 42px;
  text-align: center;
  background-color: #f2e6cf;
  text-decoration: none;
  /* &:hover { */
  /* background-color: rgba(112, 181, 249, 0.15); */
  /* color: #0a66c2; */
  /* text-decoration: none; */
  /* } */
`;

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
    font-family: Roboto Thin;
    line-height: 67px;
    width: 35%;
    font-size: 42px;
    color: #8f5849;
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
    margin-left: 20px;
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
`;

const EmailField = styled.a`
  width: 400px;
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 75%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  input {
    border: none;
    height: 80%;
    width: 100%;
  }
`;

const PasswordField = styled.a`
  width: 400px;
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    border: none;
    height: 80%;
    width: 75%;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const ForgotPassword = styled.div`
  margin: 30px auto;
  margin-bottom: 45px;
  a {
    text-decoration: none;
    span {
      color: #114c5f;
      font-family: Roboto Bold;
    }
  }
`;

const LogInHero = styled.a`
  background-color: #114c5f;
  color: #fff;
  width: 170px;
  padding: 15px 170px;
  border-radius: 24px;
  text-decoration: none;
`;

const Divider = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  span {
    &:before,
    &:after {
      content: "";
      flex: 1 1;
      border-bottom: 2px solid #ccc;
      margin: auto;
    }
  }
`;

const SignUp = styled.a`
  /* width: 408px; */
  /* height: 48px; */
  background: transparent;
  border: 1px solid #000;
  color: #000;
  top: 625.56px;
  left: 0px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.75);
  padding: 15px 90px;
  border-radius: 24px;
  text-decoration: none;
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
    font-family: Roboto Thin;
    line-height: 67px;
    width: 50%;
    font-size: 48px;
    color: #000;
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
`;

const LeadingText = styled.div`
  margin-top: 50px;
  background: #f3f2f0;
  max-width: 50%;
  height: 720px;
  div {
    width: 100%;
    display: block;
    align-items: end;
    margin-left: 200px;
    margin-top: 100px;
    width: 60%;
  }
  h2,
  span {
    font-size: 40px;
    color: #114c5f;
  }
  span {
    color: #000;
    font-family: Roboto Thin;
  }
`;

const JoinUs = styled.h2`
  font-family: Roboto Thin;
  font-size: 56px;
  margin-left: 200px;
  width: 55%;
  margin-bottom: 50px;
`;

export default Landing;
