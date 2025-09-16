// src/components/PreviewPage.jsx
// Preview page for selected template with blurring and submission.

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FormDataContext } from "../context/FormDataContext";

// Import modified templates
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import TemplateFour from "./templates/TemplateFour";
import TemplateFive from "./templates/TemplateFive";

function PreviewPage() {
  const { formData } = useContext(FormDataContext);
  console.log("Form Data is ", formData);
  const { templateId } = useParams();
  const navigate = useNavigate();

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <p className="text-xl text-gray-800">
            No form data available. Please fill out the form first.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold"
          >
            Go to Form
          </button>
        </div>
      </div>
    );
  }

  // const handleSubmitRequest = async () => {
  //   try {
  //     const requestData = { ...formData, templateId: parseInt(templateId) };
  //     const response = await axios.post('/api/submit-request', requestData);  // Replace with actual API
  //     console.log('Request submitted:', response.data);
  //     sessionStorage.removeItem('formData');
  //     navigate('/success');
  //   } catch (error) {
  //     console.error('Error submitting request:', error);
  //     alert('Failed to submit request. Please try again.');
  //   }
  // };

  const handleGenerate = () => {
    navigate(`/final-preview/${templateId}/${formData.id}`, scrollTo(0, 0));
  };

  const renderTemplate = () => {
    switch (parseInt(templateId)) {
      case 1:
        return <TemplateOne formData={formData} isPreview={true} />;
      case 2:
        return <TemplateTwo formData={formData} isPreview={true} />;
      case 3:
        return <TemplateThree formData={formData} isPreview={true} />;
      case 4:
        return <TemplateFour formData={formData} isPreview={true} />;
      case 5:
        return <TemplateFive formData={formData} isPreview={true} />;
      default:
        return <div className="text-center py-12">Template not found.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-QuickSand font-bold text-gray-900 text-center mb-8">
          Template Preview
        </h1>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          {renderTemplate()}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate("/templates", scrollTo(0, 0))}
            className="px-6 py-3 bg-gray-200 cursor-pointer text-gray-800 rounded-xl hover:bg-gray-300 transition duration-200 font-semibold"
          >
            Back to Templates
          </button>
          {/* <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-emerald-600 cursor-pointer text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold"
          >
            Generate Data
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
