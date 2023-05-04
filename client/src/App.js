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
            element={[<Header tab="Home" />, <Feed />]}
          ></Route>
          <Route
            path="/trainings"
            element={[<Header tab="Trainings" />, <Feed />]}
          ></Route>
          <Route
            path="/interships"
            element={[<Header tab="Interships" />, <Feed />]}
          ></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/create"
            element={[<Header />, <CreatePublication />]}
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
