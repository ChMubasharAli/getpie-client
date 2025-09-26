// src/components/TemplatesPage.jsx
// Page displaying 5 template cards with hover preview button.

import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "../context/FormDataContext";

// import images
import templateOne from "/src/assets/templatesImages/templateOne.png";
import templateTwo from "/src/assets/templatesImages/templateTwo.png";
import templateThree from "/src/assets/templatesImages/templateThree.png";
import templateFour from "/src/assets/templatesImages/templateFour.png";
import templateFive from "/src/assets/templatesImages/templateFive.png";
import templateSix from "/src/assets/templatesImages/templateSix.png";

function TemplatesPage() {
  const { formData } = useContext(FormDataContext);
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

  const templates = [
    {
      id: 1,
      image: templateOne,
    },
    {
      id: 2,
      image: templateTwo,
    },
    {
      id: 3,
      image: templateThree,
    },
    {
      id: 4,
      image: templateFour,
    },
    {
      id: 5,
      image: templateFive,
    },
    {
      id: 6,
      image: templateSix,
    },
  ];

  const handlePreview = (templateId) => {
    navigate(`/preview/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Choose a Template
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="shadow-xl rounded-lg bg-white p-4 overflow-hidden "
            >
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={template.image}
                  alt="Card Image"
                  className="h-64 w-full object-fill"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => handlePreview(template.id)}
                    className="rounded-full bg-white px-6 py-2 cursor-pointer  font-medium text-gray-900 shadow-md transition hover:bg-gray-100"
                  >
                    {" "}
                    Preview{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplatesPage;
