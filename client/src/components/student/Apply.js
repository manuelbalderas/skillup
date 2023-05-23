import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import {
  getPublicationAPI,
  postCVAPI,
  postInscriptionAPI,
} from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Apply = (props) => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [cv_path, setCv_file] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    props.getPublication(id);
  }, [props.publication]);

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      props.postCV(file);
    } else {
      console.log("No file selected");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleAccept = (e) => {
    e.preventDefault();
    const student_id = props.user.email;
    const publication_id = props.publication.id;
    props.postInscription({ student_id, publication_id, cv_path });
    navigate(-2);
  };

  return (
    <Container>
      <Section></Section>
      <Content>
        <Headline>
          <Photo>
            {props.user && props.user.profile_pic ? (
              <img src={props.user.profile_pic} alt="" />
            ) : (
              <img src="/images/company.svg" alt="" />
            )}
          </Photo>
          <PostInfo>
            <Title>{props.publication.title}</Title>
            <Place>
              <img src="/images/location.svg" />
              {props.publication.location}
              <Remote>
                {props.publication.remote
                  ? props.publication.remote == "yes"
                    ? "(En remoto)"
                    : "(Presencial)"
                  : "No contamos con dicha información"}
              </Remote>
            </Place>
            <CompanyName>
              <img src="/images/case.svg" />
              {props.publication.company_name}
            </CompanyName>
            <Type>
              {props.publication.type
                ? props.publication.type == "job"
                  ? "Vacante de empleo"
                  : "Curso"
                : "No contamos con dicha información"}
            </Type>
          </PostInfo>
        </Headline>
        <CV>
          <CVTitle>Importa tu CV</CVTitle>
          <ImportButton>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            Sube tu CV en PDF
          </ImportButton>
          <SelectedFile>
            Archivo seleccionado:{" "}
            {file && file.name
              ? file.name
              : "No se ha seleccionado ningún archivo."}
          </SelectedFile>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
          <AcceptButton onClick={handleAccept}>Aceptar</AcceptButton>
        </CV>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 10%;
  max-width: 100%;
  height: 100vh;
  background-color: #f3f2f0;
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

const Content = styled.div``;

const SelectedFile = styled.span`
  color: #114c5f;
`;

const Headline = styled.div`
  margin-top: 40px;
  max-width: 90%;
  display: flex;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 10px;
  transition: box-shadow 83ms;
  position: relative;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
  padding: 20px 20px 16px;
`;

const CV = styled(Headline)`
  margin-top: 100px;
  display: flex;
`;

const Photo = styled.div`
  img {
    width: 116px;
    height: 116px;
    padding-right: 20px;
  }
`;

const PostInfo = styled.div`
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.div`
  color: #114c5f;
  font-size: 25px;
  font-weight: 600;
`;

const ImportButton = styled.div`
  background: transparent;
  padding: 20px 100px;
  border-radius: 8px;
  font-weight: 600;
  color: #0799b6;
  border: 1px solid #0799b6;
  font-size: 16px;
  input[type="file"] {
    opacity: 0;
    position: absolute;
    background: green;
    cursor: pointer;
  }
`;

const CancelButton = styled.div`
  background: transparent;
  padding: 5px 10px;
  border-radius: 8px;
  color: #0799b6;
  font-weight: 600;
  border: 1px solid #0799b6;
  margin-left: 10px;
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const AcceptButton = styled(CancelButton)`
  background-color: #0799b6;
  color: white;
`;

const CVTitle = styled(Title)`
  color: #0799b6;
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 10px;
  }
  margin-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`;

const Place = styled(CompanyName)``;

const Remote = styled(CompanyName)`
  margin-left: 5px;
`;

const Type = styled.div`
  color: #114c5f;
  width: 150px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 5px;
  font-weight: 400;
  border-radius: 50px;
  background-color: rgba(59, 63, 81, 0.2);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    publication: state.publicationState.publications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPublication: (id) => dispatch(getPublicationAPI(id)),
  postCV: (file) => dispatch(postCVAPI(file)),
  postInscription: (data) => dispatch(postInscriptionAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
