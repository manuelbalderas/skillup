import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import { useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Feed = (props) => {
  return (
    <Container>
      <Section></Section>
      <Layout>
        <Leftside tab={props.tab} />
        <Main tab={props.tab} />
      </Layout>
    </Container>
  );
  // }
};

const Container = styled.div`
  padding: 0 10%;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    color: #434649;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main";
  grid-template-columns: minmax(0, 4fr) minmax(0, 12fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
