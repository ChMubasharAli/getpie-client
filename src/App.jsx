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
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<AdminHome />} /> */}
          <Route path="/" element={<StepForm />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/preview/:templateId" element={<PreviewPage />} />
          <Route
            path="/final-preview/:templateId/:userId"
            element={<FinalPreviewPage />}
          />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </FormDataContext.Provider>
  );
}

export default App;
