import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a>
              {" "}
              <Link to="/home">AGRI</Link>
            </a>
          </h1>

          <a href="index.html" class="logo">
            <img src="assets/img/logo.png" alt="" />
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  <Link to="/home">HOME</Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto">About</a>
              </li>

              <li>
                <a class="nav-link scrollto ">
                  <Link to="/desease">Desease</Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  <Link to="/blog">Blog</Link>
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link className="getstarted scrollto" to="/attention">
                  Attention
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
