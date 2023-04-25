import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/home" element={[<Header />, <Feed />]}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          {/* <Route path="/home" element={[<Header />, <Home />]}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
