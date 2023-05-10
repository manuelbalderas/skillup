import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { companySignUpAPI } from "../../actions";
import styled from "styled-components";

//no se si tenia que cambiar el nombre del email y de la contrasenia
const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        //me quedo duda con el nombre ya que en el signup de estudiante aqui lo tienes escrito de esta manera, no se si haya problemas
        email,
        password,
        companyName,
        address,
        phoneNumber,
      });
      navigate("/company/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <img src="/images/sign-up-logo.svg" />
      <h1>Estás a unos pasos de cambiar el futuro de miles de estudiantes</h1>
      <Form>
        <InputWrapper>
          <InputLabel>Email</InputLabel>
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
          <InputLabel>Nombre de la empresa</InputLabel>
          <InputField>
            <input onChange={(e) => setCompanyName(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Domicilio</InputLabel>
          <InputField>
            <input onChange={(e) => setAdress(e.target.value)}></input>
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Telefono de contacto</InputLabel>
          <InputField>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
            ></input>
          </InputField>
        </InputWrapper>
        <Accept>
          <button onClick={handleClick}>Aceptar y unirse</button>
        </Accept>
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

// const BottomText = styled.div`
//   span {
//     display: block;
//   }
// `;

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
  signUp: (data) => dispatch(companySignUpAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
