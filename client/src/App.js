import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Feed from "./components/student/Feed";
import SignUp from "./components/student/SignUp";
import CreatePublication from "./components/company/CreatePublication";
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
              <Feed key="home-feed" />,
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
              <Header key="interships-header" tab="Jobs" />,
              <Feed key="interships-header" tab="Jobs" />,
            ]}
          ></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/create"
            element={[
              <Header key="create-header" />,
              <CreatePublication key="create-publication" />,
            ]}
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
