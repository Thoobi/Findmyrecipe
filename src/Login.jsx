import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimage from "./assets/login.png";
import "./login.css";

const Login = ({ onLogin }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const upperCaseEmail = formData.email.toUpperCase();

    try {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find(
      user => user.email.toUpperCase() === upperCaseEmail && user.password === formData.password
      );

      if (/\s/.test(formData.password)) {
        setAlertMessage('Password should not contain whitespace!');
        setShowAlert(true);
        return;
      }
      
      if (user && user.password === formData.password) {
        setAlertMessage(`Login successful ${user.firstname}!`);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/Search');
        }, 3000);
      } 
      else {
        setAlertMessage('Invalid email or password. Please try again.');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
      onLogin(user);
    } catch (error) {
      console.error('There was an error during login!', error);
      setAlertMessage('There was an error during login. Please try again.');
      setShowAlert(true);
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
      <div className="container">
        <div className="img-container">
          <img className="login-img" src={loginimage} alt="" />
        </div>
        <div className="form">
        <h2 className="login-text">Login</h2>
          <form onSubmit={handleSubmit}>
          <label htmlFor="">E-mail:</label>
              <input
                type="mail"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
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

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p>
            Don&apos;t have an account? Sign up <Link to="/register">here</Link>
            <br />
            <Link to="/" className="backHome">Back to Home</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
