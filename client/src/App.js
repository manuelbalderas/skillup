import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SignUp from "./components/SignUp";
import CreatePublication from "./components/CreatePublication";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [localStorage.getItem("user")]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route
            path="/home"
            element={[<Header user={user} />, <Feed user={user} />]}
          ></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/create"
            element={[<Header user={user} />, <CreatePublication />]}
          ></Route>
          {/* <Route path="/home" element={[<Header />, <Home />]}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
