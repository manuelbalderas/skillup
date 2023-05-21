import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getPublicationAPI } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Publication = (props, { match }) => {
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    props.getPublication(id);
    console.log(props.publication);
  }, [props.publication]);

  const handleApply = (e) => {
    e.preventDefault();
    navigation(`/publication/apply/${id}`);
  };

  return (
    <Container>
      <Section></Section>
      <Layout>
        <ContainerLeft>
          <ArtCard>
            <Photo>
              {props.user && props.user.profile_pic ? (
                <img src={props.user.profile_pic} alt="" />
              ) : (
                <img src="/images/company.svg" alt="" />
              )}
            </Photo>
            <PostInfoLeft>
              <TitleLeft>{props.publication.title}</TitleLeft>
              <CompanyNameLeft>
                {props.publication.company_name}
              </CompanyNameLeft>
              <PlaceLeft>{props.publication.location}</PlaceLeft>
              <RemoteLeft>
                {props.publication.remote
                  ? props.publication.remote == "yes"
                    ? "(En remoto)"
                    : "(Presencial)"
                  : "No contamos con dicha información"}
              </RemoteLeft>
              <TypeLeft>
                {props.publication.type
                  ? props.publication.type == "job"
                    ? "Vacante de empleo"
                    : "Curso"
                  : "No contamos con dicha información"}
              </TypeLeft>
            </PostInfoLeft>
          </ArtCard>
        </ContainerLeft>
        <ContainerMain>
          <Content>
            <TitleMain>{props.publication.title}</TitleMain>
            <PostInfoMain>
              <CompanyNameMain>
                {props.publication.company_name}
              </CompanyNameMain>
              <PlaceMain>{props.publication.location}</PlaceMain>
              <RemoteMain>
                {props.publication.remote
                  ? props.publication.remote == "yes"
                    ? "(En remoto)"
                    : "(Presencial)"
                  : "(No contamos con dicha información)"}
              </RemoteMain>
              <TypeMain>
                {props.publication.type
                  ? props.publication.type == "job"
                    ? "Vacante de empleo"
                    : "Curso"
                  : "No contamos con dicha información"}
              </TypeMain>
            </PostInfoMain>
            {props.user && props.user.email === props.publication.author ? (
              <Buttons>
                <Edit>Editar</Edit>
                <Delete>Eliminar</Delete>
              </Buttons>
            ) : (
              <Buttons>
                <ApplyFor onClick={handleApply}>Aplicar</ApplyFor>
              </Buttons>
            )}
            <Description>
              <h2>Acerca del empleo</h2>
              {props.publication.publication_description !== ""
                ? props.publication.publication_description
                : "No se cuenta con una descripción"}
            </Description>
          </Content>
        </ContainerMain>
      </Layout>
    </Container>
  );
};

const Description = styled.div`
  h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #114c5f;
  }
  margin-top: 40px;
`;

const Edit = styled.button`
  background-color: #0799b6;
  padding: 10px 20px;
  border-radius: 30px;
  color: #f2e6cf;
  font-weight: 600;
  border: 2px solid #0799b6;
  /* border: none; */
  font-size: 16px;
`;

const Delete = styled(Edit)`
  background: transparent;
  color: #b6075b;
  border: 2px solid #b6075b;
  margin-left: 10px;
`;

const ApplyFor = styled(Edit)``;

const Buttons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
  margin-top: 40px;
`;

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

const Error = styled.span`
  font-size: 22px;
  color: #c56467;
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

const ContainerLeft = styled.div`
  grid-area: leftside;
`;

const ContainerMain = styled.div`
  grid-area: main;
`;

const ArtCard = styled.div`
  max-width: 80%;
  display: flex;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 10px;
  transition: box-shadow 83ms;
  position: relative;
  background-color: #fcfaf5;
  border: none;
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
  padding: 20px 20px 16px;
`;

const Photo = styled.div`
  img {
    width: 48px;
    height: 48px;
    padding-right: 20px;
  }
`;

const PostInfoLeft = styled.div`
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const TitleLeft = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const CompanyNameLeft = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const PlaceLeft = styled(CompanyNameLeft)`
  color: rgba(0, 0, 0, 0.6);
`;

const RemoteLeft = styled(PlaceLeft)``;

const TypeLeft = styled(CompanyNameLeft)`
  color: #114c5f;
  font-weight: 600;
`;

const Content = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #fcfaf5;
  border-radius: 10px;
  /* box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08); */
  padding: 30px;
`;

const TitleMain = styled.h1`
  font-size: 33px;
  color: #114c5f;
  font-weight: 600;
`;

const PostInfoMain = styled.div`
  padding-top: 10px;
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  text-align: left;
  & > *:nth-child(2):not(:last-child) {
    padding-right: 5px;
  }
  & > *:nth-child(1):not(:last-child)::after,
  & > *:nth-child(3):not(:last-child)::after {
    content: "·";
    margin: 0 10px;
  }
`;

const CompanyNameMain = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const PlaceMain = styled(CompanyNameMain)`
  /* color: rgba(0, 0, 0, 0.6); */
`;

const RemoteMain = styled(PlaceMain)`
  color: #114c5f;
`;

const TypeMain = styled(CompanyNameMain)`
  /* color: #114c5f; */
  font-weight: 600;
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    publication: state.publicationState.publications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPublication: (id) => dispatch(getPublicationAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Publication);
