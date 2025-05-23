import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Home"; // or wherever your Home.js is
import AboutPage from "./AboutPage"; // your AboutPage component
import ServicesPage from "./ServicesPage";
import ModelPage from "./ModelPage";
import ProjectsPage from "./ProjectsPage";
import CareersPage from "./CareersPage";
import ContactPage from "./ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
		<Route path="/services" element={<ServicesPage />} />
		<Route path="/ourmodel" element={<ModelPage />} />
		<Route path="/projects" element={<ProjectsPage />} />
		<Route path="/careers" element={<CareersPage />} />
		<Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
