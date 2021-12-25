import React, { useEffect, useState } from "react";
import axios from "axios";
import Navabar from "../Navbar/Navbar";
import "./Desease.css";

import "./Desease.css";
const Desease = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/desease/`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  return (
    <div>
      {/* <div className="container">
        <div class="container bootstrap snipets">
          <h1 class="text-center text-muted">Disease </h1>
          <div class="row flow-offset-2">
            {APIData.map((data) => {
              return (
                <div class="col-xs-6 col-md-4">
                  <div class="product tumbnail thumbnail-3">
                    <a href="#">
                      <img src={data.photo} alt="" />
                    </a>
                    <div class="caption">
                      <h6>
                        <h3 href="#">{data.title}</h3>
                        <p href="#">{data.description}</p>
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <section>
        <div class="container">
          <div class="text-center mb-5">
            <h5 class="text-primary h6">Our Blog</h5>
            <h2 class="display-20 display-md-18 display-lg-16">
              Most recent our blog
            </h2>
          </div>
          <div class="row">
            {APIData.map((data) => {
              return (
                <div class="col-lg-4 col-md-6 mb-2-6">
                  <article class="card card-style2">
                    <div class="card-img">
                      <img class="rounded-top" src={data.photo} alt="..." />
                    </div>
                    <div class="card-body">
                      <h3 class="h5">
                        <a href="#!">{data.title}</a>
                      </h3>
                      <p class="display-30">{data.description}</p>
                      <a href="#!" class="read-more"></a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desease;
