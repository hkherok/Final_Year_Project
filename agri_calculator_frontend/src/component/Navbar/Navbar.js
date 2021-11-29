import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import "../style.css";
const Navbar = () => {
  return (
    <div>
      {/* <header id="header" class="header fixed-top">
        <div class="container-flex container-xl d-flex align-items-left justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="https://i.ibb.co/RNf0rt4/kisspng-plantje-nl-plants-garden-aspidistra-elatior-produc-polyscias-fabian-snoeien-prijsdalers-nl-5.png" />
            <span>Agri </span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  <Link to="/home">HOME</Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/desease">Desease</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
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
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header> */}
      <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex align-items-center">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <Link to="/signin">Signin or Login</Link>
            </a>
          </div>
        </div>
      </section>

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
                <Link to="/profile">Profile</Link>
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
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
