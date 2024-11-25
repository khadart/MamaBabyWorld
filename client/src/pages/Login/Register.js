import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Register.css";
import "./Login.css";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);

      if (response.data.message === "User registered successfully") {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-login">Register</h2>
        <div className="register-inputs">
          <label>Username</label>
          <input
            placeholder="Enter UserName"
            className="username-input"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p className="errors">{errors.username.message}</p>
          )}
        </div>
        <div className="register-inputs">
          <label>Email</label>
          <input
            placeholder="Enter Email"
            className="email-input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </div>
        <div className="register-inputs">
          <label>Password</label>
          <input
            placeholder="Enter Password"
            className="password-input"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must be 8+ characters and include letters, numbers, and special characters",
              },
            })}
            type="password"
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
        </div>
        <button className="register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
