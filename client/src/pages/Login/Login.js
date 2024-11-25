import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios
        .post("http://localhost:5000/login", data)
        .then((data) => {
          if ((data.message = "Login successful")) {
            navigate("/home");
          } else {
            alert("No User exists");
          }
        });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-login">Login</h2>
        
        <div className="login-inputs">
          <label>Email</label>
          <input placeholder="Enter Email" className="email-input" {...register("email", { required: "Email is required", pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              }, })} />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </div>
        <div className="login-inputs">
          <label>Password</label>
          <input placeholder="Enter Password" className="password-input"
            {...register("password", { required: "Password is required" })}
            type="password"
          />
          {errors.password && <p className="errors">{errors.password.message}</p>}
        </div>
        <div className="login-btns">
        <button className="signin"  type="submit">Sign In</button>
        <Link className="signup" to='/register'>Sign Up</Link>
        </div>
      
        <h5 className="forgot">Forgot Password ?<span><Link> Click Here</Link></span></h5>
      </form>
    </div>
  );
};

export default Login;
