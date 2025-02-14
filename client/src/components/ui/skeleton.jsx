


import {  HashLoader } from "react-spinners";

function Spinner({
  size = 50, // Size of the loader (diameter of the dots)
  color = "#f78cbf", // Main color for the loader
  className = "",
  ...props
}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-background z-50 ${className}`}
      {...props}
    >
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
    </div>
  );
}

function Spinner2({
  size = 50, // Size of the loader (diameter of the dots)
  color = "#f78cbf", // Secondary color for the loader
  className = "",
  ...props
}) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-background z-50 ${className}`}
      {...props}
    >
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
      <HashLoader size={size} color={color} />
    </div>
  );
}

export { Spinner, Spinner2 };
