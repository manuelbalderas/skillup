import styled from "styled-components";
import { getCompaniesToValidateAPI, validateCompanyAPI } from "../../actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Validate = (props) => {
  const navigate = useNavigate();

  const handleValidate = (id) => {
    console.log(id);
    props.validateCompany({ id });
  };

  useEffect(() => {
    props.getCompanies();
  }, [props.companies]);

  return (
    <>
      {props.user && !props.user.admin && navigate("/")}
      <Container>
        <Section></Section>
        <Content>
          <>
            {props.companies.length === 0 ? (
              <Empty>
                <p>No hay empresas por validar.</p>
              </Empty>
            ) : (
              <>
                {props.companies.length > 0 &&
                  props.companies.map((company, key) => (
                    <Headline key={key}>
                      <Info>
                        <Photo>
                          <img src="/images/company.svg" />
                        </Photo>
                        <CompanyInfo>
                          <Name>{company.company_name}</Name>
                          <Email>
                            <img src="/images/email.svg" />
                            {company.email}
                          </Email>
                          <Place>
                            <img src="/images/location-pin.svg" />
                            {company.company_adress}
                          </Place>
                          <Phone>
                            <img src="/images/phone.svg" />
                            {company.phone_number}
                          </Phone>
                          <Description>
                            <img src="/images/information.svg" />
                            {company.company_description
                              ? company.company_description
                              : "No se cuenta con una descripción."}
                          </Description>
                        </CompanyInfo>
                      </Info>
                      <ValidateButton
                        onClick={() => handleValidate(company.email)}
                      >
                        Validar
                      </ValidateButton>
                    </Headline>
                  ))}
              </>
            )}
          </>
        </Content>
        <Section></Section>
      </Container>
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
  background-color: rgba(0, 0, 0, 0.08);
  min-height: 100vh;
  padding: 0 10%;
  max-width: 100%;
  p {
    text-align: center;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ValidateButton = styled.div`
  background-color: #114c5f;
  color: white;
  padding: 20px 30px;
  border-radius: 30px;
  margin-right: 50px;
  cursor: pointer;
  user-select: none;
`;

const Photo = styled.div`
  img {
    width: 116px;
    height: 116px;
    padding-right: 20px;
  }
`;

const CompanyInfo = styled.div`
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #114c5f;
`;

const Email = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  color: #767676;
  img {
    width: 20px;
    height: 20px;
    filter: rgba(0, 0, 0, 0.08);
    padding-right: 10px;
  }
`;

const Place = styled(Email)``;

const Phone = styled(Email)``;

const Description = styled(Email)``;

const Content = styled.div``;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    companies: state.companyState.companies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCompanies: () => dispatch(getCompaniesToValidateAPI()),
  validateCompany: (data) => dispatch(validateCompanyAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Validate);
