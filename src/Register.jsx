import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import signupimage from "./assets/signup.png";

const Register = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSignup(formData);
    setTimeout(() => {
      navigate('/login');
    },3000)
    alert(`Account created successfully ✅✅`);
    
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img className="signup-image" src={signupimage} alt="" />
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter your preferred username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn" id="sign-up">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
