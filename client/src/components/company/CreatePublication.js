import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreatePublication = (props) => {
  const [title, setTitle] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user) {
      // navigate("/");
    }
  });

  return (
    <Container>
      <Section></Section>
      <h1>Recluta y capacita al mejor talento</h1>
      <Form>
        <h2>Da con una gran cantidad de profesionales emergentes</h2>
        <InputWrapper>
          <InputLabel>¿Qué estás publicando?</InputLabel>
          <InputField type="email"></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>¿Es remoto?</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Ubicación</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Tipo</InputLabel>
          <InputField></InputField>
        </InputWrapper>
        <button>Realizar publicación</button>
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
  h1 {
    color: #114c5f;
    font-size: 42px;
    margin: 20px;
    font-weight: 400;
    @media (max-width: 768px) {
      margin-top: 0;
      font-size: 30px;
    }
  }
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  a {
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Form = styled.div`
  background-color: white;
  width: 504px;
  /* height: 100%; */
  border-radius: 13px;
  margin: 10px;
  @media (max-width: 768px) {
    /* width: 80%; */
  }
  h2 {
    font-size: 32px;
    line-height: 1.3;
    text-align: left;
    padding: 30px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  button {
    margin: 30px auto;
    color: white;
    background: #0799b6;
    border-radius: 24px;
    padding: 14px 118px;
    font-size: 16px;
    border: none;
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
  font-weight: 400;
  color: #114c5f;
`;

const InputField = styled.input`
  width: 410px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  margin-top: 10px;
  padding-left: 10px;
  outline: none;
`;

export default CreatePublication;
