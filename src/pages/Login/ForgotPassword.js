import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { LoginScreenStyled } from "./LoginScreenStyled";

const ForgorPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, for example:
  };

  return (
    <LoginScreenStyled>
      <form className="container" onSubmit={handleSubmit}>
        <div className="userImg">
          <FaUserAlt size={35} />
        </div>
        <div className="heading">
          <h2>Forgot Password</h2>
        </div>
        <div className="email">
          <label>Email Address</label>
          <input
            className="inputemail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="password">
          <div className="passwordHead">
            <label>New Password</label>
          </div>
          <div className="passwordInput">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="iconContainer">
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
        </div>
        <div className="password">
          <div className="passwordHead">
            <label>Confirm Password</label>
          </div>
          <div className="passwordInput">
            <input
              className="input"
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              required
            />
            <div className="iconContainer">
              <span onClick={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
        </div>

        <div className="signInCta">
          <button type="submit">Sign in</button>
        </div>
        <div className="regis">
          Don't have an account?{" "}
          <Link className="registerCta" to={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </LoginScreenStyled>
  );
};

export default ForgorPassword;
