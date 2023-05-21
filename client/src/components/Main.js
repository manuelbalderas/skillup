import { useEffect } from "react";
import styled from "styled-components";
import {
  getPublicationsAPI,
  getAuthorPublicationsAPI,
  getJobsAPI,
  getTrainingsAPI,
  getAuthorJobsAPI,
  getAuthorTrainingsAPI,
  getPublicationID,
} from "../actions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Main = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.tab == "Home") {
      if (props.user && props.user.email) {
        if (props.user.verified === undefined) {
          props.getPublications();
          return;
        }
        const email = props.user.email;
        props.getAuthorPublications(email);
      }
    } else if (props.tab == "Jobs") {
      if (props.user && props.user.email) {
        if (props.user.verified === undefined) {
          props.getJobs();
          return;
        }
        const email = props.user.email;
        props.getAuthorJobs(email);
      }
    }
    if (props.tab === "Trainings") {
      if (props.user && props.user.email) {
        if (props.user.verified === undefined) {
          props.getTrainings();
          return;
        }
        const email = props.user.email;
        props.getAuthorTrainings(email);
      }
    }
  }, [props.user]);

  const handlePublicationClick = async (publication) => {
    const id = await props.getPublication(publication.id);
    console.log(id);
    navigate(`/publication/${id}`);
  };

  return (
    <>
      {props.publications.length === 0 ? (
        <Empty>
          <p>No hay publicaciones por mostrar.</p>
        </Empty>
      ) : (
        <Container>
          <Publications>
            <Title href="">
              {props.tab == "Home"
                ? "Publicaciones"
                : props.tab == "Trainings"
                ? "Capacitaciones"
                : "Empleos"}
            </Title>
            {props.publications.length > 0 &&
              props.publications.map((publication, key) => (
                <Publication key={key}>
                  <Photo
                    src={
                      publication.profile_pic
                        ? publication.profile_pic
                        : "/images/user.svg"
                    }
                    draggable="false"
                  />
                  <div>
                    <PublicationTitle
                      onClick={() => handlePublicationClick(publication)}
                    >
                      {publication.title}
                    </PublicationTitle>
                    <ProfileName>{publication.company_name}</ProfileName>
                    <Place>
                      {publication.location} (
                      {publication.remote == "yes" ? "En remoto" : "Presencial"}
                      )
                    </Place>
                    <Type>
                      {publication.type && publication.type == "job"
                        ? "Vacante de empleo"
                        : "Curso"}
                    </Type>
                  </div>
                  {/* <button>
                    <img src="/images/save-icon.svg" alt="" draggable="false" />
                  </button> */}
                </Publication>
              ))}
          </Publications>
        </Container>
      )}
    </>
  );
};

const Empty = styled.div`
  display: flex;
  align-items: center;
  width: 95vh;
  height: 30%;
  p {
    margin: 0;
    margin-left: 1em;
    font-size: 28px;
    color: #114c5f;
  }
`;

const Container = styled.div`
  grid-area: main;
  width: 1010px;
  /* height: 1150px; */
`;

const Publications = styled.div`
  background-color: rgba(242, 230, 207, 0.2);
  margin-bottom: 50px;
  border-radius: 15px;
  padding: 10px;
`;

const Title = styled.a`
  display: flex;
  padding-left: 30px;
  padding-top: 30px;
  /* padding: 50px 30px; */
  font-size: 35px;
  color: #114c5f;
  font-weight: 600;
  text-decoration: none;
`;

const Publication = styled.div`
  height: 275px;
  display: flex;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  &:last-child {
    border-bottom: none;
  }
  img {
    margin-top: 2.5em;
    align-items: top;
  }
  div {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
  }
  button {
    display: flex;
    background: transparent;
    border: none;

    margin-bottom: auto;
    margin-left: auto;
    &:hover {
      background: black;
    }
  }
`;

const Photo = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 30px;
`;

const PublicationTitle = styled.a`
  font-size: 31px;
  line-height: 1.5;
  color: #4a6eb0;
  font-weight: 600;
`;

const ProfileName = styled.span`
  font-size: 27px;
  line-height: 1.5;
  font-weight: 200;
`;

const Place = styled(ProfileName)`
  color: rgba(0, 0, 0, 0.7);
`;

const Type = styled.span`
  font-size: 23px;
  color: #0799b6;
  margin-top: 30px;
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    publications: state.publicationState.publications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPublications: () => dispatch(getPublicationsAPI()),
  getJobs: () => dispatch(getJobsAPI()),
  getTrainings: () => dispatch(getTrainingsAPI()),
  getAuthorPublications: (author) => dispatch(getAuthorPublicationsAPI(author)),
  getAuthorJobs: (author) => dispatch(getAuthorJobsAPI(author)),
  getAuthorTrainings: (author) => dispatch(getAuthorTrainingsAPI(author)),
  getPublication: (id) => dispatch(getPublicationID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
