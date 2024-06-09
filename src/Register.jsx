import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import signupimage from "./assets/signup.png";
import axios from 'axios';

const Register = ({ onSignup }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
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

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setShowAlert(true);
      return;
    }

    

    const checkRes = await axios.get(`http://localhost:5030/users?email=${formData.email}`);
      if (checkRes.data.length > 0) {
      setAlertMessage('Account with this email already exists!');
      setShowAlert(true);
      return;
      }

    // Add timestamp to the user data
    const timestamp = new Date().toLocaleString();

    const upperCaseEmail = formData.email.toUpperCase();
    
    const submissionData = {
                ...formData,
                email: upperCaseEmail,
            };
    // Add timestamp to the user data
    const userData = { ...submissionData, signupDate: timestamp };

    try{
      const res = await axios.post('http://localhost:5030/users', userData);
      console.log(res.data);
      
      setAlertMessage('Account created successfully!');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      setTimeout(() => {
        navigate('/login');
      },3000);

      } 
    catch (error) {
      console.error('There was an error posting the data!', error);
      setAlertMessage('There was an error signing up. Please try again.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      }
      onSignup(formData);
};

  return (
    <>
    {showAlert && (
        <div className={`alert ${alertMessage.includes('success') ? 'alert-success' : 'alert-danger'}`} role="alert" id="alert">
          {alertMessage}
        </div>
      )}
      <div className="main-container">
        <div className="image-container">
          <img className="signup-image" src={signupimage} alt="" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />

            <label htmlFor="">Last Name:</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />

            <label htmlFor="">E-mail:</label>
            <input
              type="mail"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password:</label>
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

          <p id="ownAccount">
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
