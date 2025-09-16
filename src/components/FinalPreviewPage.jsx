// src/components/PreviewPage.jsx
// Preview page for selected template with blurring and submission.

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FormDataContext } from "../context/FormDataContext";

// Import modified templates
import HealthTemplate from "./templates/TemplateOne";
import SpatialTemplate from "./templates/TemplateTwo";
import DarkTemplate from "./templates/TemplateThree";
import FoodTemplate from "./templates/TemplateFour";
import EcommerceTemplate from "./templates/TemplateFive";

export default function FinalPreviewPage() {
  const { formData } = useContext(FormDataContext);
  console.log("Form Data is ", formData);
  const { templateId, userId } = useParams();
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

  const handleLiveRequest = async () => {
    navigate("/");
  };

  const renderTemplate = () => {
    switch (parseInt(templateId)) {
      case 1:
        return <HealthTemplate formData={formData} />;
      case 2:
        return <SpatialTemplate formData={formData} />;
      case 3:
        return <DarkTemplate formData={formData} />;
      case 4:
        return <FoodTemplate formData={formData} />;
      case 5:
        return <EcommerceTemplate formData={formData} />;
      default:
        return <div className="text-center py-12">Template not found.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-QuickSand font-bold text-gray-900 text-center mb-8">
          Template Final Preview{" "}
          {`(userId: ${userId}) and templateId: ${templateId}`}
        </h1>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
          {renderTemplate()}
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={handleLiveRequest}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold"
          >
            Live Now
          </button>
        </div>
      </div>
    </div>
  );
}
