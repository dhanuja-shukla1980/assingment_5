import React, { useState } from "react";

// Main App component for the Registration Form
function App() {
  // State to hold the values of our form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "", // Can be 'male' or 'female' based on image
    country: "",
    agreeTerms: false, // Boolean for the checkbox
  });

  // Function to handle changes in any form input field
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData, // Keep all existing form data
      [name]: type === "checkbox" ? checked : value, // Update the specific field that changed
    });
  };

  // Function to handle form submission (simplified for this example)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the browser's default form submission (page reload)
    console.log("Form Submitted!", formData);
    alert("Form submitted! Check console for data."); // Simple alert for confirmation
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"/>
        </div>

        {/* Email */}
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>

        {/* Gender Radio Buttons */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        {/* Country Dropdown */}
        <div className="form-group">
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="CAN">Canada</option>
            <option value="IND">India</option>
          </select>
        </div>

        {/* Agree to Terms Checkbox */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          <label htmlFor="agreeTerms">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
