import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <div className="container p-4 d-flex flex-column justify-content-between vh-100">
        <div>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <h2>Uber</h2>
            <div className="mb-4 mt-3">
              <label htmlFor="email" className="form-label fw-medium">
                What's your email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className="form-control bg-secondary-subtle"
                placeholder="email@example.com"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-medium">
                Enter Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className="form-control bg-secondary-subtle"
                placeholder="password"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 fw-medium">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            New here?
            <Link
              to="/signup"
              className="link-underline link-underline-opacity-0 fw-medium"
            >
              Create new Account
            </Link>
          </p>
        </div>
        <div className="mb-4">
          <Link to='/captain-login' type="submit" className="btn btn-success w-100 fw-medium">
            Signin as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
