// src/App.js
// Main app: Sets up routing, context, and state for form data.

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormDataContext } from "./context/FormDataContext";
import StepForm from "./components/StepForm";
import TemplatesPage from "./components/TemplatesPage";
import PreviewPage from "./components/PreviewPage";
import SuccessPage from "./components/SuccessPage";

import AdminHome from "./components/Home";
import FinalPreviewPage from "./components/FinalPreviewPage";
import TemplateSix from "./components/TemplateSix";
import NOETIC from "./components/NOETIC";
import SliceOfTheMarket from "./components/SliceOfTheMarket";
import AllProjects from "./components/AllProjects";

function App() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      console.log("Restored form data from sessionStorage:", parsedData);
    }
  }, []);

  return (
    // <FormDataContext.Provider value={{ formData, setFormData }}>
    //   <Router>
    //     <Routes>
    //       {/* <Route path="/" element={<AdminHome />} /> */}
    //       {/* <Route path="/" element={<StepForm />} /> */}
    //       <Route path="/" element={<SliceOfTheMarket />} />
    //       <Route path="/stepForm" element={<StepForm />} />
    //       <Route path="/allBusinesses" element={<AllProjects />} />
    //       <Route path="/templates" element={<TemplatesPage />} />
    //       <Route path="/preview/:templateId" element={<PreviewPage />} />
    //       <Route
    //         path="/final-preview/:templateId/:userId"
    //         element={<FinalPreviewPage />}
    //       />
    //       <Route path="/success" element={<SuccessPage />} />
    //     </Routes>
    //   </Router>
    // </FormDataContext.Provider>
    // <TemplateSix />
    <SliceOfTheMarket />
    // <AllProjects />
  );
}

export default App;
