import React, { useEffect, useState } from "react";
import "./Search.css";
import Data from "./data.json";

import axios from "axios";
const Search = () => {
  const [APIData, setAPIData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://615b12174a360f0017a81474.mockapi.io/fakedata/${search}`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, [search]);

  return (
    <div>
      <input
        type="text"
        className=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>{APIData.name}</h1>
      <div class="s007">
        <form>
          <div class="inner-form">
            <div class="section-title">
              <br></br>
              <h2 data-aos="fade-in">Search</h2>
              <p data-aos="fade-in"></p>
            </div>
            <div class="basic-search">
              <div class="input-field">
                <div class="icon-wrap"></div>

                <div class="result-count"></div>
              </div>
            </div>
            <div class="advance-search">
              <div class="row">
                <div class="input-field">
                  <div class="input-select">
                    <select
                      onSelect={(e) => setSearch(e.target.value)}
                      name="choices-single-defaul"
                    >
                      <option placeholder="">ACCESSORIES</option>
                      <option value="1">ACCESSORIES</option>
                      <option value="3">SUBJECT B</option>
                      <option value="3">SUBJECT C</option>
                    </select>
                  </div>
                </div>
                <div class="input-field">
                  <div class="input-select">
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        COLOR
                      </option>
                      <option>GREEN</option>
                      <option>SUBJECT B</option>
                      <option>SUBJECT C</option>
                    </select>
                  </div>
                </div>
                <div class="input-field">
                  <div class="input-select">
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        SIZE
                      </option>
                      <option>SIZE</option>
                      <option>SUBJECT B</option>
                      <option>SUBJECT C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row second">
                <div class="input-field">
                  <div class="input-select">
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        SALE
                      </option>
                      <option>SALE</option>
                      <option>SUBJECT B</option>
                      <option>SUBJECT C</option>
                    </select>
                  </div>
                </div>
                <div class="input-field">
                  <div class="input-select">
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        TIME
                      </option>
                      <option>THIS WEEK</option>
                      <option>SUBJECT B</option>
                      <option>SUBJECT C</option>
                    </select>
                  </div>
                </div>
                <div class="input-field">
                  <div class="input-select">
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        TYPE
                      </option>
                      <option>TYPE</option>
                      <option>SUBJECT B</option>
                      <option>SUBJECT C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row third">
                <div class="input-field">
                  <button type="button" class="btn-search">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
