import React, { useEffect, useState } from "react";
import axios from "axios";
import Navabar from "../Navbar/Navbar";

import "./Desease.css";
//hook
const Desease = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/desease/`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default Desease;
