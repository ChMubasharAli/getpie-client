// src/components/SuccessPage.jsx
// Confirmation page after submission.

import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 bg-white p-12 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-emerald-600">
          Request Submitted!
        </h1>
        <p className="text-xl text-gray-800">
          Your form data and template choice have been sent successfully.
        </p>
        <p className="text-gray-600">
          We'll process your request and get back to you soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold"
        >
          Goto Home
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
