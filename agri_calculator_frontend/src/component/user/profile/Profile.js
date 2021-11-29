import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";

function Profile() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let {
      id,
      full_name,
      cellphone,
      email,
      nid,
      birth_reg_no,
      date_of_birth,
      age,
      gender,
      nationality,
      blood_group,
      maritial_status,
      photo,
      address,
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Full Name", full_name);
    localStorage.setItem("Cellphone", cellphone);
    localStorage.setItem("Email", email);
    localStorage.setItem("NID", nid);
    localStorage.setItem("Birth_reg_no", birth_reg_no);
    localStorage.setItem("Date_of_birth", date_of_birth);
    localStorage.setItem("Age", age);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Nationality", nationality);
    localStorage.setItem("Blood_group", blood_group);
    localStorage.setItem("Maritial_status", maritial_status);
    localStorage.setItem("Photo", photo);
    localStorage.setItem("Address", address);
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/user/profile/`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Admin Portal</h1>

        {APIData.map((data) => {
          return (
            <div class="container" key={data.id}>
              <div class="view-account">
                <section class="module">
                  <div class="module-inner">
                    <div class="side-bar">
                      <div class="user-info">
                        <img
                          class="img-profile img-circle img-responsive center-block"
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                        <ul class="meta list list-unstyled">
                          <li class="name">
                            {data.full_name}
                            <label class="label label-info"></label>
                          </li>
                          <li class="email">
                            <a href="#">{data.email}</a>
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
                      <h2 class="title">
                        Profile
                        <span class="pro-label label label-warning">PRO</span>
                      </h2>
                      <form class="form-horizontal">
                        <fieldset class="fieldset">
                          <h3 class="fieldset-title">Personal Info</h3>
                          <div class="form-group avatar">
                            <figure class="figure col-md-2 col-sm-3 col-xs-12">
                              <img
                                class="img-rounded img-responsive"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                              />
                            </figure>
                            <div class="form-inline col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="file"
                                class="file-uploader pull-left"
                              />
                              <button
                                type="submit"
                                class="btn btn-sm btn-default-alt pull-left"
                              >
                                Update Image
                              </button>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br></br>
                          </div>

                          <div class="form-group">
                            <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                              User Name
                            </label>

                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="text"
                                class="form-control"
                                value={data.full_name}
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
                              <input
                                type="email"
                                class="form-control"
                                value={data.cellphone}
                              />
                              <p class="help-block">This is the email </p>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                              Email
                            </label>
                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="email"
                                class="form-control"
                                value={data.email}
                              />
                              <p class="help-block">This is the email </p>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                              NID
                            </label>
                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="email"
                                class="form-control"
                                value={data.nid}
                              />
                              <p class="help-block">This is the email </p>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                              Birth Registration No
                            </label>
                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="email"
                                class="form-control"
                                value={data.birth_reg_no}
                              />
                              <p class="help-block">This is the email </p>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                              Twitter
                            </label>
                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="text"
                                class="form-control"
                                value="SpeedyBecky"
                              />
                              <p class="help-block">Your twitter username</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                              Linkedin
                            </label>
                            <div class="col-md-10 col-sm-9 col-xs-12">
                              <input
                                type="url"
                                class="form-control"
                                value="https://www.linkedin.com/in/lorem"
                              />
                              <p class="help-block">
                                eg. https://www.linkedin.com/in/yourname
                              </p>
                            </div>
                          </div>
                        </fieldset>
                        <hr />
                        <div class="form-group">
                          <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                            <input
                              class="btn btn-primary"
                              type="submit"
                              value="Update Profile"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
