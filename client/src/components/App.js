import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import LandingPage from "./views/LandingPage/LandingPage"
import LogingPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/> } />
          <Route exact path="/login" element={<LogingPage/> } />
          <Route exact path="/register" element={<RegisterPage/>} />
        </Routes>

    </Router>
  );
}

export default App;
