import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import signupimage from "./assets/signup.png";

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

    if (/\s/.test(formData.password)) {
      setAlertMessage('Password should not contain whitespace!');
      setShowAlert(true);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setShowAlert(true);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = existingUsers.find(user => user.email === formData.email.toUpperCase());
    if (existingUser) {
      setAlertMessage('Account with this email already exists!');
      setShowAlert(true);
      return;
    }
    const timestamp = new Date().toLocaleString();
    const upperCaseEmail = formData.email.toUpperCase();

    // Add new user to localStorage
    const newUser = {
      ...formData,
      email: upperCaseEmail,
      createdAt: timestamp
    };
    

    try{
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setAlertMessage('Account created successfully!');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      // setTimeout(() => {
      //   navigate('/login');
      // },3000);

      } 
    catch (error) {
      console.error('There was an error posting the data!', error);
      setAlertMessage('There was an error signing up. Please try again.');
      setShowAlert(true);
      onSignup(formData);
      setTimeout(() => setShowAlert(false), 3000);
      }
      
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
