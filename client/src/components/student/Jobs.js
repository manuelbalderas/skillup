import { useEffect } from "react";
import styled from "styled-components";
import { getPublicationsAPI } from "../../actions";
import { connect } from "react-redux";

const Interships = (props) => {
  useEffect(() => {
    props.getPublications();
  }, []);

  console.log(props.publications);

  return (
    <>
      {props.publications.length === 0 ? (
        <p>No hay publicaciones por mostrar.</p>
      ) : (
        <Container>
          <Publications>
            <Title href="">Empleos</Title>
            {props.publications.length > 0 &&
              props.publications.map((publication, key) => (
                <Publication key={key}>
                  {console.log(publication)}
                  <Photo
                    src={
                      publication.profile_pic
                        ? publication.profile_pic
                        : "/images/spotify.png"
                    }
                  />
                  <div>
                    <PublicationTitle>{publication.title}</PublicationTitle>
                    <ProfileName>{publication.company_name}</ProfileName>
                    <Place>
                      {publication.location} (
                      {publication.remote == "yes" ? "En remoto" : "Presencial"}
                      )
                    </Place>
                    <Type>{publication.type}</Type>
                  </div>
                  <button>
                    <img src="/images/save-icon.svg" alt="" />
                  </button>
                </Publication>
              ))}
          </Publications>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
  /* width: 1010px; */
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
  padding-top: 50px;
  /* padding: 50px 30px; */
  font-size: 35px;
  color: #114c5f;
  font-weight: 600;
  text-decoration: none;
`;

const Publication = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  &:last-child {
    border-bottom: none;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 47px;
    display: flex;
    align-items: start;
    background: transparent;
    border: none;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Interships);
