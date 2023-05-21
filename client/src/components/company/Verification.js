import styled from "styled-components";

const Verification = (props) => {
  return (
    <Container>
      <Content>
        <a href="/company/login">
          <img src="/images/sign-up-logo.svg" />
        </a>
        <h1>
          Para concluir con la verificación, envía un correo a
          smalldickenergy@getalife.com con el asunto VALIDAR EMPRESA - NOMBRE
          con los siguientes datos
        </h1>
        <ul>
          <li>RFC</li>
          <li>Archivo fiscal</li>
          <li>Número de contacto</li>
        </ul>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #f3f2f0;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  inline-size: 95%;
  overflow-wrap: break-word;
  img {
    margin-top: 1em;
    width: 177px;
  }
  h1,
  ul {
    font-weight: 400;
    color: #114c5f;
    font-size: 59px;
    margin-top: 20px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  ul {
    list-style-position: inside;
    list-style-type: "-";
  }
`;

export default Verification;
