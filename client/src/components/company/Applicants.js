import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPublicationAPI,
  deletePublicationAPI,
  getApplicantsAPI,
} from "../../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const UserProfilePreview = ({ applicant }) => {
  return (
    <PreviewContainer>
      <PreviewPhoto>
        {applicant.profile_pic ? (
          <img src={applicant.profile_pic} />
        ) : (
          <img src="/images/user.svg" />
        )}
      </PreviewPhoto>
      <PreviewInfo>
        <PreviewTitle>
          {applicant.student_name} {applicant.student_last_name}
        </PreviewTitle>
        <PreviewDescription>
          <img src="/images/information.svg" />
          Estudiante en {applicant.university}
        </PreviewDescription>
        <PreviewCountry>
          <img src="/images/location-pin.svg" />
          {applicant.country}
        </PreviewCountry>
        <PreviewEmail>
          <img src="/images/email-2.svg" />
          {applicant.email}
        </PreviewEmail>
      </PreviewInfo>
    </PreviewContainer>
  );
};

const Publication = (props) => {
  const { id } = useParams();

  const [showProfileIndex, setShowProfileIndex] = useState(null);

  useEffect(() => {
    props.getPublication(id);
  }, [props.publication]);

  useEffect(() => {
    props.getApplicants(id);
  }, [props.applicants]);

  const handleMouseEnter = (index) => {
    setShowProfileIndex(index);
  };

  const handleMouseLeave = () => {
    setShowProfileIndex(null);
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
                    ? "En remoto"
                    : "Presencial"
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
            <TitleMain>
              {props.applicants.length != 1
                ? props.applicants.length != 0
                  ? props.applicants.length + " Interesados"
                  : "No hay ningún interesado"
                : props.applicants.length + " Interesado"}
            </TitleMain>
            <>
              {props.applicants.length > 0 &&
                props.applicants.map((applicant, key) => (
                  <ApplicantCard>
                    <ApplicantPhoto>
                      <img src={applicant.profile_pic || "/images/user.svg"} />
                    </ApplicantPhoto>
                    <ApplicantInfo>
                      <ApplicantName
                        onMouseEnter={() => handleMouseEnter(key)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {applicant.student_name} {applicant.student_last_name}
                      </ApplicantName>
                      <ApplicantDescription>
                        Estudiante en {applicant.university}
                      </ApplicantDescription>
                    </ApplicantInfo>
                    {showProfileIndex === key && (
                      <UserProfilePreview applicant={applicant} />
                    )}
                  </ApplicantCard>
                ))}
            </>
          </Content>
        </ContainerMain>
      </Layout>
    </Container>
  );
};

const PreviewContainer = styled.div`
  z-index: 9999;
  position: absolute;
  display: flex;
  align-content: center;
  top: -100%;
  left: 6%;
  background-color: #fcfaf5;
  border-radius: 5px;
  padding: 10px;
  /* width: 300px; */
  min-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const PreviewPhoto = styled.div`
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

const PreviewTitle = styled.div`
  color: #114c5f;
  font-weight: 600;
`;

const PreviewDescription = styled.div`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-content: center;
  margin-top: 5px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const PreviewCountry = styled(PreviewDescription)``;

const PreviewEmail = styled(PreviewDescription)`
  color: black;
  font-weight: 600;
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
  color: #114c5f;
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
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
  padding: 30px;
`;

const TitleMain = styled.h1`
  font-size: 33px;
  color: #114c5f;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CompanyNameMain = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ApplicantCard = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px;
`;

const ApplicantPhoto = styled.div`
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
`;

const ApplicantInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ApplicantName = styled.span`
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ApplicantDescription = styled.span``;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    publication: state.publicationState.publications,
    applicants: state.applicantState.applicants,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPublication: (id) => dispatch(getPublicationAPI(id)),
  deletePublication: (id) => dispatch(deletePublicationAPI(id)),
  getApplicants: (id) => dispatch(getApplicantsAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Publication);
