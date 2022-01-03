import React, { useEffect, useState, useReducer} from "react";
import "./Profile.css";
import axios from "axios";
import { coreAxios } from "../../../utils/axios";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function Profile() {
  const [APIData, setAPIData] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, {});

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
        console.log(response)
        setAPIData(response.data[0]);
        localStorage.setItem('userid', response.data[0].id);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    const userid = localStorage.getItem('userid')

    coreAxios
      .put(`http://127.0.0.1:8000/api/user/profile/${userid}/`, formData)
      .then(res => {
        console.log(res);
        alert("Saved Successfully");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <div class="container" key={APIData.id}>
          <div class="view-account">
            <section class="module">
              <div class="module-inner">
                <div class="side-bar">
                  <div class="user-info">
                    <img
                      class="img-profile img-circle img-responsive center-block"
                      src={APIData.photo}
                      alt={APIData.full_name}
                    />
                    <ul class="meta list list-unstyled">
                      <li class="name">
                        {APIData.full_name}
                        <label class="label label-info"></label>
                      </li>
                      <li class="email">
                        <a href="#">{APIData.email}</a>
                      </li>
                      <li class="cellphone">
                        <a href="#">{APIData.cellphone}</a>
                      </li>
                    </ul>
                  </div>
                  <nav class="side-menu">
                    <ul class="nav">
                      <li class="active">
                        <a href="#">
                          <span class="fa fa-user"></span> Profile
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fa fa-cog"></span> Settings
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fa fa-credit-card"></span> Billing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fa fa-envelope"></span> Messages
                        </a>
                      </li>

                      <li>
                        <a href="user-drive.html">
                          <span class="fa fa-th"></span> Drive
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="fa fa-clock-o"></span> Reminders
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="content-panel">
                  <h2 class="title">Profile</h2>
                  <form class="form-horizontal" onSubmit={handleSubmit}>
                    <fieldset class="fieldset">
                      <h3 class="fieldset-title">Personal Info</h3>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                          Full Name
                        </label>

                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input onChange={handleChange}
                            type="text"
                            class="form-control"
                            name="full_name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                          Photo
                        </label>

                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input onChange={handleChange}
                            type="text"
                            class="form-control"
                            name="photo"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <fieldset class="fieldset">
                      <h3 class="fieldset-title">Contact Info</h3>
                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Cellphone
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input onChange={handleChange}
                            type="text"
                            class="form-control"
                            name="cellphone"
                          />
                          <p class="help-block">This is the email </p>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Email
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input onChange={handleChange}
                            type="email"
                            class="form-control"
                            name="email"
                          />
                          <p class="help-block">This is the email </p>
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Address
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input onChange={handleChange}
                            type="email"
                            class="form-control"
                            name="address"
                            value={APIData.address}
                          />
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <div class="form-group"></div>
                    <div>
                      <button
                        type="submit"
                        class="btn btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
