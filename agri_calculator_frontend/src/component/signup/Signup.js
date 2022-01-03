import React, { useReducer, useState } from 'react';
import { message } from 'antd';
import { Link } from "react-router-dom";
import "./Signup.css";
import { coreAxios } from '../../utils/axios';
import axios from 'axios';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const Signup = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  
  const handleSubmit = event => {
    event.preventDefault();
    
    axios
      .post('http://127.0.0.1:8000/api/register/', formData)
      .then(res => {
        console.log(res);
        alert("Registered Successfully");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div>
      <div class="container-fluid m-5 justify-content-center card0">
        <div class="row my-5">
          <div class="col-md-6 text-left text-white lcol">
            <img
              class="pt-5 banner"
              src="https://images.pexels.com/photos/4530784/pexels-photo-4530784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />

            <div class="footer">
              <div class="socials d-flex flex-row justify-content-between text-dark">
                <div class="d-flex flex-row">
                  <i class="fab fa-facebook-f facebook text-center"></i>
                  <i class="fab fa-google google text-center"></i>
                </div>
                <span></span> <span></span>
              </div>
            </div>
          </div>
          <div class="col-md-6  rcol">
            <form onSubmit={handleSubmit}>
              <h2 class="heading mb-4 pt-2">Sign up</h2>

              <div class="form-group fone mt-2 text-sm">
                Name
                <input onChange={handleChange}
                  type="name"
                  name="full_name"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="form-group fone mt-2 text-sm">
                User Name
                <input onChange={handleChange}
                  type="username"
                  id="username"
                  name="username"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group  mt-2 text-sm">
                Email Address
                <input onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="Work email"
                />
              </div>
              <div class="form-group fone mt-2 text-sm">
                Password
                <input onChange={handleChange}
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="form-group fone mt-2 text-sm">
                  Confirm Password
                  <input onChange={handleChange}
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <input
                  type="checkbox"
                  class="form-check-input ml-0"
                  id="exampleCheck1"
                />
                <label class="form-check-label ml-3" for="exampleCheck1">
                  &nbsp;I agree to Agri-Team <u>Terms</u> and <u>Privacy Policy</u>
                </label>
              </div>

              <button type="submit" class="btn btn-blue mt-5">
                Signup
              </button>
            </form>
            <p class="exist mt-4">
              Existing user?
              <a>
                <Link to="/signin">Sign In</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
