import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components";
import { companyLogInAPI } from "../../actions";
import { connect } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    props.logIn({ email, password });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/company/sign-up");
  };

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <img src="/images/sign-up-logo.svg" />
      <h1>Ingresa como empresa</h1>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: #f3f2f0;
  /* text-align: center; */
  img {
    margin-top: 1em;
  }
  h1 {
    font-weight: 200;
    color: #114c5f;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 20px;
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
  padding: 15px 10px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: white;

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
  /* height: 100%; */
  color: #fff;
  font-weight: 600;
  border: none;
  font-size: 16px;
`;

const SignUp = styled(LogInHero)`
  background-color: #0799b6;
  padding: 20px 90px;
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

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(companyLogInAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
