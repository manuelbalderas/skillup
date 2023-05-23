import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Dropdown from "./Dropdown";
import { getPublicationAPI, editPublicationAPI } from "../../actions";
// import { postPublicationAPI } from "../../actions";

const CreatePublication = (props) => {
  const { id } = useParams();

  const [title, setTitle] = useState(null);
  const [isRemote, setIsRemote] = useState(null);
  const [location, setLocation] = useState(null);
  const [type, setType] = useState(null);
  const [description, setDescription] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  const remoteOptions = [
    { value: "yes", label: "Sí" },
    { value: "no", label: "No" },
  ];

  const typeOptions = [
    { value: "job", label: "Vacante de empleo" },
    { value: "course", label: "Curso" },
  ];

  useEffect(() => {
    props.getPublication(id);
  }, [id]);

  useEffect(() => {
    setTitle(props.publication.title);
    setLocation(props.publication.location);
    setIsRemote(
      remoteOptions.find((option) => option.value === props.publication.remote)
    );
    setType(
      typeOptions.find((option) => option.value === props.publication.type)
    );
    setDescription(props.publication.publication_description);
    console.log(description);
  }, [props.publication]);

  console.log(type);

  const handleChangeWindow = (e) => {
    e.preventDefault();
    setShowNext(!showNext);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    try {
      const isRemoteValue = isRemote.value;
      const typeValue = type.value;
      props.editPublication({
        id,
        title,
        isRemoteValue,
        location,
        typeValue,
        description,
      });
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {props.user && props.user.verified ? (
        <>
          {!showNext ? (
            <Container>
              <Principal>
                <Section></Section>
                <h1>Recluta y capacita al mejor talento</h1>
                <Form>
                  <h2>Da con una gran cantidad de profesionales emergentes</h2>
                  <InputWrapper>
                    <InputLabel>¿Qué estás publicando?</InputLabel>
                    <InputField>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      ></input>
                    </InputField>
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel>¿Es remoto?</InputLabel>
                    <Dropdown
                      placeholder="Selecciona..."
                      options={remoteOptions}
                      onChange={(value) => setIsRemote(value)}
                      value={isRemote}
                    ></Dropdown>
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel>Ubicación</InputLabel>
                    <InputField>
                      <input
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                      ></input>
                    </InputField>
                  </InputWrapper>
                  <InputWrapper>
                    <InputLabel>Tipo</InputLabel>
                    <Dropdown
                      placeholder="Selecciona..."
                      options={typeOptions}
                      onChange={(value) => setType(value)}
                      value={type}
                    ></Dropdown>
                  </InputWrapper>
                  <button onClick={handleChangeWindow}>Siguiente</button>
                </Form>
              </Principal>
            </Container>
          ) : (
            <Container>
              <Section></Section>
              <Layout>
                <ContainerRight>
                  <ArtCard>
                    <Photo>
                      {props.user && props.user.profile_pic ? (
                        <img src={props.user.profile_pic} alt="" />
                      ) : (
                        <img src="/images/user.svg" alt="" />
                      )}
                    </Photo>
                    <PostInfo>
                      <TitleRight>{title}</TitleRight>
                      <CompanyName>
                        {props.user && props.user.company_name
                          ? props.user.company_name
                          : "Companía"}
                      </CompanyName>
                      <Place>{location}</Place>
                      <Remote>
                        {isRemote
                          ? isRemote.value == "yes"
                            ? "(En remoto)"
                            : "(Presencial)"
                          : "No contamos con dicha información"}
                      </Remote>
                      <Type>
                        {type
                          ? type.value == "job"
                            ? "Vacante de empleo"
                            : "Curso"
                          : "No contamos con dicha información"}
                      </Type>
                    </PostInfo>
                  </ArtCard>
                </ContainerRight>
                <ContainerMain>
                  <Content>
                    <TitleMain>
                      Háblanos del{" "}
                      {type ? (type == "job" ? "puesto" : "curso") : null}
                    </TitleMain>
                    <Description>
                      Descripción
                      <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      ></textarea>
                    </Description>
                    <Buttons>
                      <Back onClick={handleChangeWindow}>Volver</Back>
                      <Publish onClick={handlePublish}>
                        Editar{" "}
                        {type ? (type == "job" ? "puesto" : "curso") : null}
                      </Publish>
                    </Buttons>
                  </Content>
                </ContainerMain>
              </Layout>
              <Section></Section>
            </Container>
          )}
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0 10%;
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  /* height: 100vh; */
  margin: 0;
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
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
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
    border-radius: 30px;
    padding: 14px 30%;
    font-size: 26px;
    border: none;
    cursor: pointer;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputLabel = styled.span`
  font-size: 18px;
  /* margin-bottom: -5px; */
  font-weight: 400;
  color: #114c5f;
`;

const InputField = styled.div`
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: white;
  width: 410px;
  height: 32px;
  margin-top: 10px;
  input {
    font-weight: 400;
    font-size: 18px;
    border: none;
    outline: none;
    height: 80%;
    width: 100%;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "main rightside";
  grid-template-columns: minmax(0, 12fr) minmax(0, 4fr);
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

const ContainerRight = styled.div`
  grid-area: rightside;
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
  border: none;
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
  padding: 20px 20px 16px;
`;

const PostInfo = styled.div`
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Photo = styled.div`
  img {
    width: 48px;
    height: 48px;
    padding-right: 20px;
  }
`;

const TitleRight = styled.div`
  color: #114c5f;
  font-size: 16px;
  font-weight: 600;
`;

const CompanyName = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const Place = styled(CompanyName)`
  color: rgba(0, 0, 0, 0.6);
`;

const Remote = styled(Place)``;

const Type = styled(CompanyName)`
  color: #114c5f;
  font-weight: 600;
`;

const ContainerMain = styled.div`
  grid-area: main;
`;

const Content = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
`;

const TitleMain = styled.div`
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Description = styled(TitleMain)`
  display: flex;
  flex-direction: column;
  textarea {
    min-height: 45vh;
    padding: 10px;
    margin-top: 10px;
    border: 2px solid rgba(17, 76, 95, 0.6);
    border-radius: 4px;
    resize: none;
    outline: none;
    font-size: 14px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
  align-items: center;
  padding: 10px 10px 30px;
`;

const Publish = styled.button`
  cursor: pointer;
  background-color: #114c5f;
  padding: 10px;
  border-radius: 30px;
  /* width: 100%; */
  color: #fff;
  font-weight: 600;
  border: none;
  font-size: 16px;
  margin: 5px;
`;

const Back = styled(Publish)`
  background: transparent;
  color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    publication: state.publicationState.publications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // postPublication: (data) => dispatch(postPublicationAPI(data)),
  getPublication: (id) => dispatch(getPublicationAPI(id)),
  editPublication: (data) => dispatch(editPublicationAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePublication);
