import { connect } from "react-redux";
import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo>
              {props.user && props.user.profile_pic ? (
                <img src={props.user.profile_pic} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
            </Photo>
            <Link>
              {props.user && props.user.student_name
                ? props.user.student_name + " " + props.user.student_last_name
                : props.user && props.user.company_name
                ? props.user.company_name
                : "Usuario"}
            </Link>
          </a>
          <AddPhotoText>
            {props.user && props.user.university
              ? "Estudiante en " + props.user.university
              : props.user && props.user.company_description != "null"
              ? props.user.company_description
              : "Descripcion"}
          </AddPhotoText>
        </UserInfo>
      </ArtCard>
      {props.user && props.user.verified ? (
        <Item href="/create">
          <span>
            Crear publicación
            <img src="/images/create-publication.svg" alt="" />
          </span>
        </Item>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: rgba(242, 230, 207, 0.2);
  border-radius: 10px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0px 0px 0px 1.33333px rgba(0, 0, 0, 0.08);
`;

const UserInfo = styled.div`
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/background.png");
  background-position: center;
  background-size: 462px;
  height: 75px;
  margin: -12px -12px 0;
  @media (max-width: 768px) {
    height: 54px;
  }
`;

const Photo = styled.div`
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  img {
    width: 96px;
    height: 96px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
  }
`;

const Link = styled.div`
  font-size: 22px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  background-color: rgba(242, 230, 207, 0.2);
  text-align: left;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-top: 20px;
  border-radius: 10px;
  text-decoration: none;
  span {
    display: flex;
    font-size: 24;
    align-items: center;
    color: #114c5f;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: #e9e6e1;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Leftside);
