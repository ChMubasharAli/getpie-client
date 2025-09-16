// src/components/StepForm.jsx
// Multi-step form component with validation, submission, and integration.

import React, { useState, useContext } from "react";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "../context/FormDataContext";
import { FaLeaf } from "react-icons/fa";
import axios from "axios";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",

    business_description: "",

    logo: null,
  });

  // const [formData, setFormData] = useState({
  //   businessName: "",
  //   email: "sherijatt68@gmail.com",
  //   domain: "ecofreshsupplies.com",
  //   industry: "Sustainable Products",
  //   business_description:
  //     "EcoFresh Supplies provides eco-friendly cleaning and household products designed to reduce environmental impact.",
  //   services_description:
  //     "Wholesale eco-products, Subscription boxes, Corporate partnerships",
  //   audience_description:
  //     "Environmentally conscious consumers, eco-friendly businesses, and families looking for sustainable options.",
  //   target_location: "United States, Canada",
  //   audience_pain_points:
  //     "High cost of eco-friendly alternatives, limited availability, skepticism about product effectiveness.",
  //   tone_of_voice: "Friendly, Trustworthy, Informative",
  //   primary_goal: "Increase online sales and subscription signups",
  //   logo: null,
  // });

  const [logoPreview, setLogoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { setFormData: setGlobalFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const validateStep = () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.businessName)
          newErrors.businessName = "Business name is required";
        break;

      case 2:
        if (!formData.business_description)
          newErrors.business_description = "Business description is required";
        break;

      case 3:
        if (!formData.logo) newErrors.logo = "Logo is required";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // TODO:
    const newValue =
      name === "add business field here" ? value.replace(/\s+/g, "_") : value;
    setFormData({ ...formData, [name]: newValue });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });
    setLogoPreview(file ? URL.createObjectURL(file) : null);
    if (errors.logo) setErrors({ ...errors, logo: "" });
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // try {
      //   setIsLoading(true);
      //   const response = await axios.post(
      //     "http://localhost:3000/api/user-website-info", // Replace with actual API
      //     data,
      //     { headers: { "Content-Type": "multipart/form-data" } }
      //   );
      //   console.log("Success:", response.data);

      //   if (response.data) {
      setGlobalFormData({
        ...formData,
        // id: response?.data?.id,
        // domain: response?.data?.domain,
      });
      sessionStorage.setItem(
        "formData",
        JSON.stringify({
          ...formData,
          // id: response?.data?.id,
          // domain: response?.data?.domain,
        })
      );

      navigate("/templates", scrollTo(0, 0));
      //     }
      //   } catch (error) {
      //     setIsLoading(false);
      //     console.error("Error:", error);
      //     alert("Failed to submit form. Please try again.");
      //   }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <label className="block text-xl font-semibold text-emerald-800 mb-3">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600 transition duration-200 ${
                errors.businessName ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter your business name"
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-2">{errors.businessName}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <label className="block text-xl font-semibold text-emerald-800 mb-3">
              Business Description
            </label>
            <textarea
              name="business_description"
              value={formData.business_description}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600 transition duration-200 ${
                errors.business_description
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              placeholder="Enter business description"
            />
            {errors.business_description && (
              <p className="text-red-500 text-sm mt-2">
                {errors.business_description}
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <label className="block text-xl font-semibold text-emerald-800 mb-3">
              Logo
            </label>
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              className={`w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600 transition duration-200 ${
                errors.logo ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.logo && (
              <p className="text-red-500 text-sm mt-2">{errors.logo}</p>
            )}
            {logoPreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Selected Logo Preview:
                </p>
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  className="max-w-xs h-auto rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-100 h-screen flex  items-center justify-center">
      <div className="max-w-2xl w-full mx-auto  pb-8  bg-white rounded-2xl shadow-xl">
        <div className="relative  mb-8">
          <div className="overflow-hidden h-2 rounded-tr-2xl rounded-tl-2xl text-xs flex  bg-gray-200">
            <div
              style={{ width: `${((step - 1) / 2) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-600 transition-all duration-500 ease-in-out"
            ></div>
          </div>
        </div>

        <div className="relative h-10 md:h-20 w-fit mx-auto rounded-2xl bg-center overflow-hidden  ">
          <img
            src={"/logoImage.jpg"}
            alt="Website Logo"
            className=" h-full w-full object-cover"
          />
        </div>
        <section className="space-y-6 px-8">
          {renderStep()}
          <div className="flex justify-between items-center mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 cursor-pointer py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition duration-200 font-semibold"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 cursor-pointer bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                type="submit"
                className="px-6 cursor-pointer py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition duration-200 font-semibold ml-auto"
              >
                {isLoading ? (
                  <span className=" flex  items-center justify-center gap-2">
                    <Loader className="animate-spin text-white " />{" "}
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default StepForm;
