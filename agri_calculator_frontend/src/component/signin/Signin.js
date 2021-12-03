import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
function Signin() {
  return (
    <div className="login-body">
      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          <div class="row d-flex">
            <div class="col-lg-6 lcol">
              <div class="card1 pb-5">
                <div class="row pt-5"> </div>
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img
                    src="https://i.ibb.co/ww9hW5L/gettyimages-166842929-612x612.jpg"
                    class="image"
                  />{" "}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <div class="row mb-4 px-3">
                  <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                  <div class="facebook text-center mr-3">
                    <div class="fab fa-facebook-f"></div>
                  </div>
                  <div class="google text-center mr-3">
                    <div class="fab fa-google"></div>
                  </div>
                </div>
                <div class="row px-3 mb-4">
                  <div class="line"></div>{" "}
                  <small class="or text-center">Or</small>
                  <div class="line"></div>
                </div>

                <form>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <input
                      class="mb-4"
                      type="text"
                      name="email"
                      placeholder="Enter a valid email address"
                    />{" "}
                  </div>
                  <div class="row px-3">
                    {" "}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>{" "}
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                    />{" "}
                  </div>
                  <div class="row px-3 mb-4">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      {" "}
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        class="custom-control-input"
                      />{" "}
                      <label for="chk1" class="custom-control-label text-sm">
                        Remember me
                      </label>{" "}
                    </div>{" "}
                    <a href="#" class="ml-auto mb-0 text-sm">
                      Forgot Password?
                    </a>
                  </div>
                  <div class="row mb-3 px-3">
                    {" "}
                    <button type="" class="btn btn-blue text-center">
                      <Link to="/dashboard"> Login</Link>
                    </button>{" "}
                  </div>
                  <div class="row mb-4 px-3">
                    {" "}
                    <small class="font-weight-bold">
                      Don't have an account?{" "}
                      <a class="text-danger">
                        <Link to="/signup"> Register</Link>
                      </a>
                    </small>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
