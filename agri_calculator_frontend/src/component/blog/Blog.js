import React from "react";
import "./Blog.css";
function Blog() {
  return (
    <div>
      <div class="blog-single gray-bg">
        <div class="container">
          <div class="row align-items-start">
            <div class="col-lg-8 m-15px-tb">
              <article class="article">
                <div class="article-img">
                  <img
                    src="https://image.freepik.com/free-photo/smart-digital-agriculture-technology-by-futuristic-sensor-data-collection_31965-13402.jpg"
                    title=""
                    alt=""
                  />
                </div>
                <div class="article-title">
                  <h6>
                    <a href="#">Agriculture</a>
                  </h6>
                  <h2>“Farmers only worry during the growing season, but townspeople worry all the time.”</h2>
                  <div class="media">
                    <div class="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        title=""
                        alt=""
                      />
                    </div>
                    <div class="media-body">
                      <label>Rachel Roth</label>
                      <span>26 FEB 1996</span>
                    </div>
                  </div>
                </div>
                <div class="article-content">
                  <p>
                    Farming has come a long way since its beginning! It is said that during the first Agricultural Revolution, which started around the 10,000 B.C. it came into prominence when the nomadic tribes started growing crops. The Industrial Revolution, from 1700 AD to 1900 AD helped usher the second Agricultural Revolution which led to faster and more efficient farming technology being discovered. And last but not the least, the Green Revolution in the late 20th century saw population growth and the creation of genetic engineering, chemical fertilizers and biotechnology further aiding the mass production of agricultural goods
                  </p>
                  <blockquote>
                    <p>
                      “In olden times there were warriors, farmers, craftsmen, and merchants. Agriculture was said to be closer to the source of things than trade or manufacturing, and the farmer was said to be “the cupbearer of the gods.”  He was always able to get by somehow or other and have enough to eat.”
                    </p>

                    <p class="blockquote-footer">
                      Masanobu Fukuoka {" "}
                      <cite title="Source Title">'The One-Straw Revolution'</cite>
                    </p>
                  </blockquote>
                  <h4>Agriculture Information Service</h4>
                  <p>
                  Agriculture Information Service (AIS) a communication department under the Ministry of Agriculture, located at Khamarbari, Farmgate, dhaka. Activities related to agricultural information and communication started with the establishment of the Agriculture Information Service in 1961. The main objectives of AIS are to: (i) produce training aids, and provide information and educational materials for field staff and farmers in support of improved techniques and better methods of cultivation; (ii) create agricultural literature on site specific information in English and Bengali; (iii) establish distribution channels for the produced materials of communication throughout the country; (vi) train field staff in use of information materials; and (v) motivate rural people for formation of Chasi (farmers') clubs, Jele (fishermen's) clubs, etc.
                  </p>
                  <blockquote>
                    <p>
                    The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.
                    </p>
                    <p class="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">JOHN F. KENNEDY</cite>
                    </p>
                  </blockquote>
                  <p>
                  Burn down your cities and leave our farms, and your cities will spring up again as if by magic; but destroy our farms and the grass will grow in the streets of every city in the country.


                  </p>
                </div>
                <div class="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a>
                </div>
              </article>
              <div class="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" method="POST">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          class="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="4"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send">
                        <button class="px-btn theme">
                          <span>Submit</span> <i class="arrow"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 m-15px-tb blog-aside">
              <div class="widget widget-author">
                <div class="widget-title">
                  <h3>Author</h3>
                </div>
                <div class="widget-body">
                  <div class="media align-items-center">
                    <div class="avatar">
                      <img
                        src="https://i.ibb.co/xqfFkcR/logo.png"
                        title=""
                        alt=""
                      />
                    </div>
                    <div class="media-body">
                      <h6>
                        Hello, We are 
                        <br /> "Agri Calculator Team"
                      </h6>
                    </div>
                  </div>
                  <p>
                    We are design and develop services for farmer's.
                  
                  </p>
                </div>
              </div>

              <div class="widget widget-post">
                <div class="widget-title">
                  <h3>Trending News</h3>
                </div>
                <div class="widget-body"></div>
              </div>

              <div class="widget widget-latest-post">
                <div class="widget-title">
                  <h3>Latest Post</h3>
                </div>
                <div class="widget-body">
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                          Soil resilience needed to fuel second Green Revolution
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                        Gil Gullickson
                        </a>
                        <a class="date" href="#">
                          15 Dec 2021
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://static.agriculture.com/styles/node_article_image_full_large/s3/image/2021/12/15/DSC_0045.JPG?timestamp=1639573787"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                          Iowa farmland values up 29%
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                        Bill Spiegel
                        </a>
                        <a class="date" href="#">
                          14 Dec 2021
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://static.agriculture.com/styles/node_article_image_full_large/s3/image/2021/12/14/IowaLandValues.jpg?timestamp=1639511863"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div class="latest-post-aside media">
                    <div class="lpa-left media-body">
                      <div class="lpa-title">
                        <h5>
                          <a href="#">
                          Dangerous winds could accompany record-breaking Wednesday heat
                          </a>
                        </h5>
                      </div>
                      <div class="lpa-meta">
                        <a class="name" href="#">
                        Iowa Capital Dispatch
                        </a>
                        <a class="date" href="#">
                          12 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div class="lpa-right">
                      <a href="#">
                        <img
                          src="https://static.agriculture.com/styles/node_article_image_full_large/s3/s3fs-public/image/2018/10/12/Bane%20Farm%20with%20Wind%20Turbine.JPG?timestamp=1539352362"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget widget-tags">
                <div class="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div class="widget-body">
                  <div class="nav tag-cloud">
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">Travel</a>
                    <a href="#">Web Design</a>
                    <a href="#">Marketing</a>
                    <a href="#">Research</a>
                    <a href="#">Managment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
