import styled from "styled-components";

const Main = (props) => {
  return (
    <>
      <Container>
        <Publications>
          <Title href="">Recomendaciones</Title>
          <Publication>
            <Photo src="/images/spotify.png" />
            <div>
              <PublicationTitle>Data Engineer - Music</PublicationTitle>
              <ProfileName>Spotify</ProfileName>
              <Place>México (En remoto)</Place>
              <Time>Hace 7 horas</Time>
            </div>
            <button>
              <img src="/images/save-icon.svg" alt="" />
            </button>
          </Publication>
        </Publications>
        <Publications>
          <Title href="">Más pasantías para ti</Title>
          <Publication>
            <Photo src="/images/spotify.png" />
            <div>
              <PublicationTitle>Data Engineer - Music</PublicationTitle>
              <ProfileName>Spotify</ProfileName>
              <Place>México (En remoto)</Place>
              <Time>Hace 7 horas</Time>
            </div>
            <button>
              <img src="/images/save-icon.svg" alt="" />
            </button>
          </Publication>
        </Publications>
      </Container>
    </>
  );
};

const Container = styled.div`
  grid-area: main;
  width: 1010px;
  /* height: 1150px; */
`;

const Publications = styled.div`
  background-color: rgba(242, 230, 207, 0.2);
  margin-bottom: 50px;
  border-radius: 15px;
  height: 100%;
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

const Time = styled.span`
  font-size: 23px;
  color: #0799b6;
  margin-top: 30px;
`;

export default Main;
