import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import FirstSignUpScreen from "./components/FirstSignUpScreen";
import OTPVarification from "./components/OTP";
import Work from "./pages/Work";
const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<FirstSignUpScreen />} />
          <Route path="/otp-verification" element={<OTPVarification />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
