import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentSignUpAPI } from "../../actions";
import styled from "styled-components";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(props.user);
  });

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      props.signUp({
        email,
        password,
        name,
        lastName,
        country,
        city,
        university,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <img src="/images/sign-up-logo.svg" />
      <h1>Estás a unos pasos de cambiar tu futuro</h1>
      <Form>
        <InputWrapper>
          <InputLabel>Correo electrónico</InputLabel>
          <InputField>
            <input onChange={(e) => setEmail(e.target.value)}></input>
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
        <InputWrapper>
          <InputLabel>Nombre</InputLabel>
          <InputField>
            <input onChange={(e) => setName(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Apellido</InputLabel>
          <InputField>
            <input onChange={(e) => setLastName(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>País</InputLabel>
          <InputField>
            <input onChange={(e) => setCountry(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Ciudad</InputLabel>
          <InputField>
            <input onChange={(e) => setCity(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Universidad</InputLabel>
          <InputField>
            <input onChange={(e) => setUniversity(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <Accept>
          <button onClick={handleClick}>Aceptar y unirse</button>
        </Accept>
        <BottomText>
          <LogIn>
            <span>
              ¿Ya eres miembro de SkillUp?
              <a>Iniciar sesión</a>
            </span>
          </LogIn>
          <Company>
            <span>
              ¿Quieres crear un perfil para tu empresa?
              <a> Hazlo acá</a>
            </span>
          </Company>
        </BottomText>
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
  text-align: center;
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
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 462px;
  align-items: center;
  border-radius: 13px;
  margin-bottom: 1em;
`;

const BottomText = styled.div`
  span {
    display: block;
  }
`;

const LogIn = styled.div`
  span {
    color: #114c5f;
    font-size: 16;
  }
  a {
    color: #0799b6;
    font-weight: 600;
  }
`;

const Company = styled(LogIn)`
  span {
    font-size: 14;
    margin: 10px;
    padding-bottom: 20px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: left;
  &:first-child {
    margin-top: 30px;
  }
`;

const InputLabel = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
`;

const InputField = styled.a`
  width: 342px;
  height: 32px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  input {
    flex: 1;
    border: none;
    outline: none;
    height: 80%;
    padding-left: 10px;
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

const Accept = styled.div`
  button {
    margin: 15px auto;
    color: white;
    background: #0799b6;
    border-radius: 24px;
    padding: 14px 118px;
    font-size: 16px;
    border: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(studentSignUpAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
