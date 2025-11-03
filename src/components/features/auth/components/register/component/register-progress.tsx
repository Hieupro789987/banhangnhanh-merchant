import React from "react";
import { useLocation } from "react-router-dom";

const RegisterProgress = () => {
  const stepPath = [
    "/register/information",
    "/register/legal",
    "/register/type",
    "/register/features",
    "/register/overview",
  ];

  const location = useLocation();

  const currentStep =
    stepPath.findIndex((step) => location.pathname.includes(step)) + 1;

  const progressPercentage = (currentStep / stepPath.length) * 100;

  return (
    <div className="w-full bg-white p-1">
      <div className="h-1 w-full rounded-lg bg-primary-light overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
export default RegisterProgress;
