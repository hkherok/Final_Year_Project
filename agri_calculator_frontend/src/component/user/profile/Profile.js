import React, { useEffect, useState, useReducer } from "react"
import "./Profile.css"
import axios from "axios"
import { coreAxios } from "../../../utils/axios"
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  }
}

function Profile() {
  const [APIData, setAPIData] = useState([])
  const [formData, setFormData] = useReducer(formReducer, {})

  useEffect(() => {
    setUser()
  }, [])

  const setUser = () => {
    const username = localStorage.getItem("username")
    getUser(username)
  }

  const getUser = (username) => {
    coreAxios
      .get(`http://127.0.0.1:8000/api/user/profile/?search=${username}`)
      .then((response) => {
        setAPIData(response.data[0])
        localStorage.setItem("userid", response.data[0].id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userid = localStorage.getItem("userid")

    const formDataWithPhoto = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithPhoto.append(key, value)
    })
    formDataWithPhoto.append("photo", formData.photo) // Assuming photo is the key for image in formData

    coreAxios
      .put(
        `http://127.0.0.1:8000/api/user/profile/${userid}/`,
        formDataWithPhoto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res)
        alert("Saved Successfully")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (event) => {
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value
    setFormData({
      name: event.target.name,
      value: value,
    })
  }

  return (
    <div>
      <div className="profile">
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
                          Photo
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            type="file"
                            onChange={handleChange}
                            class="form-control"
                            name="photo"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                          Full Name
                        </label>

                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.full_name}
                            type="text"
                            class="form-control"
                            name="full_name"
                          />
                        </div>
                      </div>
                      {/* <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                          Photo
                        </label>

                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            type="file"
                            className="form-control"
                            name="photo"
                            onChange={handleChange}
                          />
                        </div>
                      </div> */}
                    </fieldset>
                    <fieldset class="fieldset">
                      <h3 class="fieldset-title">Contact Info</h3>
                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Cellphone
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.cellphone}
                            type="text"
                            class="form-control"
                            name="cellphone"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Email
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.email}
                            type="email"
                            class="form-control"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          NID
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.nid}
                            type="text"
                            class="form-control"
                            name="nid"
                          />
                        </div>
                      </div>

                      <div
                        class="form-group
                      "
                      >
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Birth Registration
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.birth_registration_number}
                            type="text"
                            class="form-control"
                            name="birth_registration_number"
                          />
                        </div>
                      </div>
                      <div
                        class="form-group
                      "
                      >
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Date Of Birth
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
                            value={APIData.date_of_birth}
                            type="text"
                            class="form-control"
                            name="date_of_birth"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">
                          Address
                        </label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input
                            onChange={handleChange}
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
                      <button type="submit" class="btn btn-primary">
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
  )
}

export default Profile
