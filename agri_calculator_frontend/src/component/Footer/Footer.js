import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <section class="widget widget-light-skin">
              <h3 class="widget-title">Get In Touch With Us</h3>
              <p class="text-white">Phone: 00 33 169 7720</p>
              <ul class="list-unstyled text-sm text-white">
                <li>
                  <span class="opacity-50">Monday-Friday:</span>9.00 am - 8.00
                  pm
                </li>
                <li>
                  <span class="opacity-50">Saturday:</span>10.00 am - 6.00 pm
                </li>
              </ul>
              <p>
                <a class="navi-link-light" href="#">
                  support@unishop.com
                </a>
              </p>
              <a
                class="social-button shape-circle sb-facebook sb-light-skin"
                href="#"
              >
                <i class="socicon-facebook"></i>
              </a>
              <a
                class="social-button shape-circle sb-twitter sb-light-skin"
                href="#"
              >
                <i class="socicon-twitter"></i>
              </a>
              <a
                class="social-button shape-circle sb-instagram sb-light-skin"
                href="#"
              >
                <i class="socicon-instagram"></i>
              </a>
              <a
                class="social-button shape-circle sb-google-plus sb-light-skin"
                href="#"
              >
                <i class="socicon-googleplus"></i>
              </a>
            </section>
          </div>
          <div class="col-lg-3 col-md-6">
            <section class="widget widget-light-skin">
              <h3 class="widget-title">Our Mobile App</h3>
              <a class="market-button apple-button mb-light-skin" href="#">
                <span class="mb-subtitle">Download on the</span>
                <span class="mb-title">App Store</span>
              </a>
              <a class="market-button google-button mb-light-skin" href="#">
                <span class="mb-subtitle">Download on the</span>
                <span class="mb-title">Google Play</span>
              </a>
              <a class="market-button windows-button mb-light-skin" href="#">
                <span class="mb-subtitle">Download on the</span>
                <span class="mb-title">Windows Store</span>
              </a>
            </section>
          </div>
          <div class="col-lg-3 col-md-6">
            <section class="widget widget-links widget-light-skin">
              <h3 class="widget-title">About Us</h3>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About Unishop</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Our Blog</a>
                </li>
              </ul>
            </section>
          </div>
          <div class="col-lg-3 col-md-6">
            <section class="widget widget-links widget-light-skin">
              <h3 class="widget-title">Account &amp; Shipping Info</h3>
              <ul>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Shipping Rates &amp; Policies</a>
                </li>
                <li>
                  <a href="#">Refunds &amp; Replacements</a>
                </li>
                <li>
                  <a href="#">Taxes</a>
                </li>
                <li>
                  <a href="#">Delivery Info</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <hr class="hr-light mt-2 margin-bottom-2x" />
        <div class="row">
          <div class="col-md-7 padding-bottom-1x"></div>
          <div class="col-md-5 padding-bottom-1x">
            <div class="margin-top-1x hidden-md-up"></div>

            <form
              class="subscribe-form"
              action="#"
              method="post"
              target="_blank"
              novalidate=""
            >
              <div class="clearfix">
                <div class="input-group input-light">
                  <input
                    class="form-control"
                    type="email"
                    name="EMAIL"
                    placeholder="Your e-mail"
                  />
                  <span class="input-group-addon">
                    <i class="icon-mail"></i>
                  </span>
                </div>
                <button class="btn btn-primary mt-2" type="submit">
                  Suscbribe
                </button>
              </div>
              <span class="form-text text-sm text-white opacity-50">
                Subscribe to our Newsletter to receive early discount offers,
                latest news, sales and promo information.
              </span>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
