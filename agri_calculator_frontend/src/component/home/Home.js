import React from "react";
import "./Home.css";
import Search from "../Search/Search";
function Home() {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Agri Calculator </h1>
              <h2>
                Agri Calculator or Digital System of Plants Problem
                Identification (DPPIS) is a digital effort to solve farmers'
                crop problems quickly and effectively.
              </h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" class="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  class="glightbox btn-watch-video"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://i.ibb.co/c6YFsDw/farmer-gdeb9cce0a-1920.jpg"
                class="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Search /> */}

      <section id="about" class="about section-bg">
        <div class="container">
          <div class="row">
            <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start">
              <img src="https://i.ibb.co/fML66dZ/grain-g9d025b235-1920.jpg" />
            </div>
            <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
              <div class="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay="100">
                  Agricultural advisory services
                </h3>
                <p data-aos="fade-in">
                  Those problems and their solutions have been added. Multiple
                  pictures of each problem and at least one representative
                  picture have been added
                </p>
                <div class="row">
                  <div class="col-md-6 icon-box" data-aos="fade-up">
                    <i class="bx bx-receipt"></i>
                    <h4>
                      <a href="#">Easily identify his problem.</a>
                    </h4>
                    <p>
                      In order to help the farmers who are not able to know the
                      problem of their crop well when they come to take
                      agricultural advisory services,
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="bx bx-cube-alt"></i>
                    <h4>
                      <a href="#">Solution to the problem</a>
                    </h4>
                    <p>
                      Then the farmers are shown the pictures of those who do
                      not come up with any problem.
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="bx bx-images"></i>
                    <h4>
                      <a href="#"> Multiple surveys</a>
                    </h4>
                    <p>
                      Multiple surveys were conducted to get the views of the
                      farmers. It shows that 6% of the farmers who have not
                      availed the service in this way and 100% of the farmers
                      who have availed the service in this way think that the
                      method is helpful for them.
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="bx bx-shield"></i>
                    <h4>
                      <a href="#">Encouraging response.</a>
                    </h4>
                    <p>
                      The Agri Calculator actually helps the farmer to properly
                      present his problem to the extension worker. Using it, an
                      advanced farmer can solve his crop problems on his own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services section-bg">
        <div class="container">
          <div class="section-title">
            <h2 data-aos="fade-in">Services</h2>
            <p data-aos="fade-in">
              Using the Agri Calculator will benefit both the service recipient
              and the service provider. The service recipient will get fast and
              accurate service and the service provider can easily and quickly
              solve any problem using the Agri Calculator
            </p>
          </div>

          <div class="row">
            <div
              class="col-md-6 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/08/09/20/52/old-man-4395870_960_720.jpg"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">It is farmer friendly</a>
                  </h5>
                  <p class="card-text">
                    very picture used in the Agri Calculator is taken from the
                    field and the picture is used exactly as the farmer sees the
                    problem in the field. As a result, the farmer can recognize
                    the problem correctly. (Research has shown that the glitter
                    and the pictures working in Photoshop confuse the farmers.I
                  </p>
                  <div class="read-more">
                    <a href="#">
                      <i class="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch"
              data-aos="fade-left"
            >
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/04/25/19/36/farmer-2260636_960_720.jpg"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Emphasizes environmentally</a>
                  </h5>
                  <p class="card-text">
                    it emphasizes environmentally friendly practices in pest
                    management and includes Farmer Behavior Change Communication
                    (FBCC); This will bring about some behavioral changes in the
                    farmers which will reduce the recurrence.
                  </p>
                  <div class="read-more">
                    <a href="#">
                      <i class="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/07/08/12/40/soil-386749_960_720.jpg"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href=""> The extension worker</a>
                  </h5>
                  <p class="card-text">
                    The Agri Calculator actually helps the farmer to properly
                    present his problem to the extension worker. Using it, an
                    advanced farmer can solve his crop problems on his own.
                  </p>
                  <div class="read-more">
                    <a href="#">
                      <i class="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 d-flex align-items-stretch"
              data-aos="fade-left"
            >
              <div class="card">
                <div class="card-img">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/04/24/buffalo-1822581_960_720.jpg"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href=""> Communication</a>
                  </h5>
                  <p class="card-text">
                    By using the Agri Calculator, the possible communication
                    noise between the service recipient and the service provider
                    can be brought down to the lowest level. The Agri Calculator
                    actually helps the farmer to properly present his problem to
                    the extension worker. Using it, an advanced farmer can solve
                    his crop problems on his own.
                  </p>
                  <div class="read-more">
                    <a href="#">
                      <i class="bi bi-arrow-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" class="features section-bg">
        <div class="container">
          <div class="section-title">
            <h2 data-aos="fade-in">Features</h2>
            <p data-aos="fade-in">
            Agri Calculator is a digital endeavor to provide quick and effective solutions to
            various crop problems of farmers.Farmers can see how to cultivate their land on 
             our website.

            </p>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img
                src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?size=626&ext=jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-md-7 pt-4" data-aos="fade-left">
              <h3>
              In this system a unemployed people can be able to learn about Agriculture system.
              </h3>
              <p class="fst-italic">
              By looking at the pictures here the farmer / user can identify any problem of the crop and the 
              solution of the problem floats on the monitor just by clicking on the marked picture.

              </p>
              <ul>
                <li>
                  <i class="bi bi-check"></i> Farmers can see how to cultivate their land on our website.

                </li>
                <li>
                  <i class="bi bi-check"></i> In this system a unemployed people can be able to learn about Agriculture system.


                </li>
              </ul>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="https://i.ibb.co/7Y9cshh/door.png" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Farmers' door-to-door service: Farmers are getting service at home through Union Digital Center, Fiak and AICC</h3>
              <p class="fst-italic">
              It is farmer friendly: every picture used in the Agri Calculator is taken from the field and the picture is used exactly as the farmer sees the problem in the field. As a result, the farmer can recognize the problem correctly. (Research has shown that the glitter and the pictures working in Photoshop confuse the farmers.
              </p>
              <p>
              It is environmentally friendly: it emphasizes environmentally friendly practices in pest management and includes Farmer Behavior Change Communication (FBCC); This will bring about some behavioral changes in the farmers which will reduce the recurrence of the same problem in the future and also reduce the use of chemical pesticides. At the same time, it provides specific advice that will reduce the use of random chemical pesticides.
              </p>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img src="https://media.istockphoto.com/photos/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring-picture-id1181859042?k=20&m=1181859042&s=612x612&w=0&h=HYJg5wgy4nr8_otAl6nNgmXSlTVtfJ9Aa9CUAxl5FHc=" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5" data-aos="fade-left">
              <h3>
              The rationale for this initiative
              </h3>
              <p>
              Using the Agri Calculator will benefit both the service recipient and the service provider. The service recipient will get fast and accurate service and the service provider can easily and quickly solve any problem using the Agri Calculator. By using the Agri Calculator, the possible communication noise between the service recipient and the service provider can be brought down to the lowest level. The Agri Calculator actually helps the farmer to properly present his problem to the extension worker. Using it, an advanced farmer can solve his crop problems on his own.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check"></i>  Up to 7.6% time saved in getting / giving service
                </li>
                <li>
                  <i class="bi bi-check"></i>  Save up to 7.00% on getting / giving services
                </li>
                <li>
                  <i class="bi bi-check"></i>  Travel has been saved up to 7.8% to get / pay for the service
                </li>
              </ul>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="https://wallpaperaccess.com/full/137487.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>
              The result of innovation
              </h3>
              <p class="fst-italic">
              Using the Agri Calculator will benefit both the service recipient and the service provider. 
              </p>
              <p>
              The service recipient will get fast and accurate service and the service provider can easily and quickly solve any problem using the Agri Calculator. By using the Agri Calculator, the possible communication noise between the service recipient and the service provider can be brought down to the lowest level. The Agri Calculator actually helps the farmer to properly present his problem to the extension worker. Using it, an advanced farmer can solve his crop problems on his own.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* features */}
    </div>
  );
}

export default Home;
