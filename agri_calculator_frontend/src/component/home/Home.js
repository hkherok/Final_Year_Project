import React from "react";
import "./Home.css";
import Search from "../Search/Search";
function Home() {
  return (
    <div>
      <section id="hero">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div
              class=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
              data-aos="fade-right"
            >
              <h1>Your new digital experience with Bocor</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
            >
              <img src="assets/img/hero-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Search />

      <section id="about" class="about section-bg">
        <div class="container">
          <div class="row">
            <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
              <div class="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-in" data-aos-delay="100">
                  Voluptatem dignissimos provident quasi
                </h3>
                <p data-aos="fade-in">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <div class="row">
                  <div class="col-md-6 icon-box" data-aos="fade-up">
                    <i class="bx bx-receipt"></i>
                    <h4>
                      <a href="#">Corporis voluptates sit</a>
                    </h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="bx bx-cube-alt"></i>
                    <h4>
                      <a href="#">Ullamco laboris nisi</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="bx bx-images"></i>
                    <h4>
                      <a href="#">Labore consequatur</a>
                    </h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="bx bx-shield"></i>
                    <h4>
                      <a href="#">Beatae veritatis</a>
                    </h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div
              class="col-md-6 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div class="card">
                <div class="card-img">
                  <img src="assets/img/services-1.jpg" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Temporibus laudantium</a>
                  </h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
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
                  <img src="assets/img/services-2.jpg" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Aperiores voluptates</a>
                  </h5>
                  <p class="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo
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
                  <img src="assets/img/services-3.jpg" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Veritatis natus nisi</a>
                  </h5>
                  <p class="card-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                    fugit, sed quia magni dolores eos qui ratione voluptatem
                    sequi nesciunt Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet
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
                  <img src="assets/img/services-4.jpg" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Aliquam veritatis</a>
                  </h5>
                  <p class="card-text">
                    Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                    quisquam laudantium voluptatem. In molestiae earum ab sit
                    esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil
                    aut incidunt aut
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img src="assets/img/features-1.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-4" data-aos="fade-left">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
              </ul>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="assets/img/features-2.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>Corporis temporibus maiores provident</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5" data-aos="fade-right">
              <img src="assets/img/features-3.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5" data-aos="fade-left">
              <h3>
                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                voluptas
              </h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bi bi-check"></i> Facilis ut et voluptatem aperiam.
                  Autem soluta ad fugiat.
                </li>
              </ul>
            </div>
          </div>

          <div class="row content">
            <div class="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src="assets/img/features-4.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
              <h3>
                Quas et necessitatibus eaque impedit ipsum animi consequatur
                incidunt in
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
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
