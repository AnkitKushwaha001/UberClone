import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const newUser = {
      fullName: {
          firstName: firstName,
          lastName: lastName,
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate('/home');    
    }

    setFirstName('');
    setLastName('');
    setEamil('');
    setPassword('');
  };

  return (
    <div>
        <div className="container p-4 d-flex flex-column justify-content-between vh-100">
          <div>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h2>Uber</h2>
              <div className="mb-4 mt-3">
                {/* <label htmlFor="email" className="form-label fw-medium">
                  What's your name
                </label> */}
                <h6>Enter Full Name</h6>
                <div className="d-flex gap-3">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    className="form-control bg-secondary-subtle"
                    placeholder="First Name"
                    // id="email"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    className="form-control bg-secondary-subtle"
                    placeholder="Last Name"
                    // id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="mb-4 mt-3">
                <label htmlFor="email" className="form-label fw-medium">
                  What's your email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEamil(e.target.value)
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
                    setPassword(e.target.value);
                  }}
                  className="form-control bg-secondary-subtle"
                  placeholder="password"
                  id="password"
                />
              </div>
              <button type="submit" className="btn btn-dark w-100 fw-medium">
                Create Account
              </button>
            </form>
            <p className="text-center mt-3">
              Already have a account?
              <Link
                to="/login"
                className="link-underline link-underline-opacity-0 fw-medium"
              >
                Login here
              </Link>
            </p>
          </div>
          <div className="mb-">
            <p style={{ fontSize: "10px" }} className="lh-sm">
              By procedding, you consent to get calls, Whatsapp or SMS message,
              including by automated means, from uber and its affiliates to the
              number provide.
            </p>
          </div>
        </div>
    </div>
  );
};

export default UserSignup;
