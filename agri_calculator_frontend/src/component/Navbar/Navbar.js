import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState} from "react";
import axios from "axios";
import { Profile } from "./Data";
import { coreAxios } from "../../utils/axios";

const Navbar = () => {
  const [User, setAPIData] = useState(new Profile());

  useEffect((e) => {
    //e.preventDefault();
    setUser();
  }, []);


  const setUser = () => {
    const username = localStorage.getItem('username');
    getUser(username);
  }

  const getUser = (username) => {
    coreAxios
      .get(`http://127.0.0.1:8000/api/user/profile/?search=${username}`)
      .then((response) => {
        let profile = new Profile();
        profile = response.data[0];
        console.log(profile);
        setAPIData(profile);
        localStorage.setItem('userid', response.data[0].id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function logout(){
    localStorage.clear();
  }

  return (
    <div>
      {console.log(User)}
      <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <Link to="/">
              <img src="https://i.ibb.co/xqfFkcR/logo.png" />
            </Link>
          </h1>

          <a href="index.html" class="logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <Link to="/dashboard">Agri Calculator</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <a class="nav-link scrollto ">
                  <Link to="/desease">Disease</Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  <Link to="/blog">Blog</Link>
                </a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/history">Search History</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link className="getstarted scrollto" to="/attention">
                  Attention
                </Link>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>{User ? User.full_name : "User"}</span>{" "}
                  <i class="bi bi-chevron-down"></i>
                  <img
                    style={{ width: "50px", border: "0", borderRadius: "50%" }}
                    src={
                      User
                        ? User.photo
                        : "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    }
                  />
                </a>
                <ul>
                  <li>
                    <span>
                      <Link to="/profile">Profile</Link>
                    </span>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <span>
                      <Link to="/signin" onClick={logout}>
                        Logout
                      </Link>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  )
};
export default Navbar;
