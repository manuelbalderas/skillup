import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Feed from "./components/Feed";
import StudentSignUp from "./components/student/SignUp";
import CreatePublication from "./components/company/CreatePublication";
import EditPublication from "./components/company/EditPublication";
import CompanySignUp from "./components/company/SignUp";
import Verification from "./components/company/Verification";
import Validate from "./components/admin/Validate";
import CompanyLogin from "./components/company/Login";
import AdminLogin from "./components/admin/Login";
import Publication from "./components/Publication";
import Applicants from "./components/company/Applicants";
import Apply from "./components/student/Apply";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route
            path="/home"
            element={[
              <Header key="home-header" tab="Home" />,
              <Feed key="home-feed" tab="Home" />,
            ]}
          ></Route>
          <Route
            path="/trainings"
            element={[
              <Header key="trainings-header" tab="Trainings" />,
              <Feed key="trainings-feed" tab="Trainings" />,
            ]}
          ></Route>
          <Route
            path="/jobs"
            element={[
              <Header key="jobs-header" tab="Jobs" />,
              <Feed key="jobs-feed" tab="Jobs" />,
            ]}
          ></Route>
          <Route path="/student/sign-up" element={<StudentSignUp />}></Route>
          <Route path="/company/sign-up" element={<CompanySignUp />}></Route>
          <Route
            path="/company/validate"
            element={[<Header />, <Validate />]}
          ></Route>
          <Route
            path="/company/sign-up/verification"
            element={<Verification />}
          ></Route>
          <Route path="/company/login" element={<CompanyLogin />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route
            path="/create"
            element={[
              <Header key="create-header" />,
              <CreatePublication key="create-publication" />,
            ]}
          ></Route>
          <Route
            path="/publication/:id"
            element={[<Header />, <Publication />]}
          ></Route>
          <Route
            path="/publication/edit/:id"
            element={[<Header />, <EditPublication />]}
          ></Route>
          <Route
            path="/publication/apply/:id"
            element={[<Header />, <Apply />]}
          ></Route>
          <Route
            path="/publication/applicants/:id"
            element={[<Header />, <Applicants />]}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
