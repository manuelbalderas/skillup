import styled from "styled-components";

const SignUp = (props) => {
  return (
    <Container>
      <img src="/images/sign-up-logo.svg" />
      <h1>Estás a unos pasos de cambiar tu futuro</h1>
      <Form>
        <InputWrapper>
          <InputLabel>Correo electrónico</InputLabel>
          <InputField type="email"></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Contraseña</InputLabel>
          <InputField type="password"></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Nombre</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Apellido</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>País</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Ciudad</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Universidad</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <button>Aceptar y unirse</button>
        <span style={{ color: "#114C5F", fontSize: 16, margin: 10 }}>
          ¿Ya eres miembro de SkillUp?
          <a style={{ color: "#0799B6", fontWeight: 600 }}> Iniciar sesión</a>
        </span>
        <span
          style={{
            color: "#114C5F",
            fontSize: 14,
            margin: 10,
            paddingBottom: 20,
          }}
        >
          ¿Quieres crear un perfil para tu empresa?
          <a style={{ color: "#0799B6", fontWeight: 600 }}> Hazlo acá</a>
        </span>
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
  background-color: rgba(0, 0, 0, 0.05);
  text-align: center;
  img {
    margin-top: 20px;
  }
  h1 {
    font-family: Roboto Light;
    color: #114c5f;
    font-size: 32px;
    margin: 20px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Form = styled.div`
  background-color: white;
  width: 462px;
  /* height: 100%; */
  border-radius: 13px;
  margin: 10px;
  @media (max-width: 768px) {
    /* width: 80%; */
  }
  button {
    margin-top: 30px;
    color: white;
    background: #0799b6;
    border-radius: 24px;
    padding: 14px 118px;
    font-size: 16px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  span {
    display: block;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
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
  margin-bottom: -5px;
`;

const InputField = styled.input`
  width: 342px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  margin-top: 10px;
  padding-left: 10px;
`;

export default SignUp;
