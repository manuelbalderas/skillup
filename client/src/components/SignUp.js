// require("dotenv").config();
import { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

const SignUp = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [university, setUniversity] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(process.env.SERVERURL);
    const response = await fetch(`${process.env.SERVER_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        name,
        lastName,
        country,
        city,
        university,
      }),
    });

    const data = await response.json();

    if (data.detail) {
      // handle
    } else {
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);

      window.location.reload();
    }

    await response.json();
  };

  console.log(email, password, name, lastName, country, city, university);

  return (
    <Container>
      <img src="/images/sign-up-logo.svg" />
      <h1>Estás a unos pasos de cambiar tu futuro</h1>
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Nombre</InputLabel>
          <InputField>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Apellido</InputLabel>
          <InputField>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>País</InputLabel>
          <InputField>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Ciudad</InputLabel>
          <InputField>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Universidad</InputLabel>
          <InputField>
            <input
              type="text"
              onChange={(e) => setUniversity(e.target.value)}
            ></input>
          </InputField>
        </InputWrapper>
        <AcceptButton>
          <button onClick={handleSubmit}>Aceptar y unirse</button>
        </AcceptButton>
        <LogIn>
          <span>
            ¿Ya eres miembro de SkillUp?
            <a> Iniciar sesión</a>
          </span>
        </LogIn>
        <Company>
          <span>
            ¿Quieres crear un perfil para tu empresa?
            <a> Hazlo acá</a>
          </span>
        </Company>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #f3f2f0;
  text-align: center;
  h1 {
    font-weight: 400;
    color: #114c5f;
    font-size: 32px;
    margin: 40px 20px;
    @media (max-width: 768px) {
      margin: 20px 10px;
      font-size: 20px;
    }
  }
`;

const Form = styled.div`
  background-color: white;
  width: 30%;
  border-radius: 13px;
  span {
    display: block;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 15px;
  &:first-child {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  /* margin-bottom: -5px; */
`;

const InputField = styled.a`
  width: 80%;
  height: 32px;
  /* padding: 10px; */
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
  }
`;

const AcceptButton = styled.div`
  button {
    font-weight: 600;
    margin: 15px 0px;
    /* width: 30%; */
    /* text-align: center; */
    color: white;
    background: #0799b6;
    border-radius: 24px;
    padding: 14px 118px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  }
`;

export default SignUp;
