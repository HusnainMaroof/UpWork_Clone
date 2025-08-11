import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import FirstSignUpScreen from "./components/FirstSignUpScreen";
const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/FirstSignUpScreen"
            element={<FirstSignUpScreen />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
