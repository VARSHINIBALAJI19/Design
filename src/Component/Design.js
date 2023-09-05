import React from "react";
import Logo from "../Image/Logo.png";
import Menu from "../Image/Menu.svg";
import Smiling from "../Image/Smiling.jpg";
import Display1 from "../Image/Display1.jpg";
import Display2 from "../Image/Display2.jpg";
import Display3 from "../Image/Display3.jpg";
import Display4 from "../Image/Display4.jpg";
import Display5 from "../Image/Display5.jpg";
import Display6 from "../Image/Display6.jpg";
// import 'font-awesome/css/font-awesome.min.css';

import "../Style/Design.css";

function Design() {
  return (
    <>
      <div className="nav">
        <div>
          <img src={Logo} alt="logo" className="logo-image" />
        </div>

        <div>
          <img src={Menu} alt="img" className="about-page" />
        </div>
      </div>

      <div className="page-view">
        <div className="bg-image">
          <img src={Smiling} alt="" className="bg-image" />
        </div>
      </div>

      <div className="form-container">
        <div className="white-box">
          <form>
            <div>
              {/* <img src={Circle} alt='circle'  className='circle' /> */}
            </div>
            <h2 className="text">Who we are</h2>
            <p className="align-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.
            </p>

            <br />

            <span className="style">Images from Freepik</span>
            <br />
            <br />
            <br />
            <button className="btn-read">LEARN MORE</button>
          </form>
        </div>

        <div className="body">
          <p className="body-text">about us</p>
          <h2 className="txt">What We Believe</h2>
          <span className="body-content">
            Our diverse, global teams are passionate about unlocking potential
            and making change happen, delivering integrated solutions through
            leading-edge management consulting, technology and design, and
            corporate and digital ventures.
          </span>
          <br />
          <br />
          <br />
          <button type="button" className="btn-learn">
            LEARN MORE
          </button>
        </div>

        <div className="vl"></div>

        <div className="container" id="aboutus-rightpanel">
          <p className="align-right">
            To unlock the potential of those who advance the world, we believe
            we must stay true to our company principles, our values, and each
            other. Inherent in this pursuit is our ability to attract and retain
            the best talent from all backgrounds and fully reflect the diverse
            world in which we live and work.
          </p>

          <div className="bullets">
            <h5 className="ourpeople">OUR PEOPLE</h5>
            <h5 className="ourvalue">OUR VALUES</h5>
            <h5>OUR LEADERS</h5>
            <h5>OUR CULTURE</h5>
            <h5>OUR TEAM</h5>
            <h5>OUR AWARDS</h5>
          </div>
        </div>

        <div className="background-layout">
          <p className="background-layout-text">
            Deep Expertise, Broad Experience
          </p>
          <div className="top">
            <div className="box">
              <h3>5K</h3>
              <h6>SQUARE FEET MANAGED</h6>
            </div>
            <div className="box">
              <h3>5K</h3>
              <h6>EMPLOYEES</h6>
            </div>
          </div>
          <div className="bottom">
            <div className="box">
              <h3>100K</h3>
              <h6>HAPPY CLIENTS</h6>
            </div>
            <div className="box">
              <h3>1230</h3>
              <h6>AWARDS</h6>
            </div>
          </div>
        </div>
        <div className="bg-text">
          <p className="meet-text">Meet Our Leaders</p>
          <br />
          <p className="iff">Image from freepik</p>
        </div>

        <div className="row">
          <div className="outer-box" style={{ marginRight: "3%" }}>
            <div className="inner-box">
              <img src={Display1} alt="" className="display1" />
            </div>
            <div className="inner-box-container">
            <i className="fa fa-instagram" ></i>
              BOB GREENFIELD
              <br />
              Senior Partner
              
            </div>
          </div>
          <div className="outer-box">
            <div className="inner-box">
              <img src={Display2} alt="" className="display2" />
            </div>
            {/* <div className="inner-box-container2"> */}
            MARY BROWN
            <br />
            Senior Partner
            {/* </div> */}
          </div>

          <div className="outer-box" style={{ marginLeft: "3%" }}>
            <div className="inner-box3">
              <img src={Display3} alt="" className="display3" />
            </div>
            <div className="inner-box-container3">
              ANN RICHMOND
              <br />
              Creative Leader
            </div>
          </div>

          <div className="outer-box" style={{marginRight:'3%'}}>
            <div className="inner-box4">
              <img src={Display4} alt="" className="display4" />
            </div>
            <div className="inner-box-container4">
              ROXIE SWANSON
              <br />
              Managing Director
            </div>
          </div>
          <div className="outer-box">
            <div className="inner-box5">
              <img src={Display5} alt="" className="display5" />
            </div>
            <div className="inner-box-container5">
              MATTIE SMITH
              <br />
              Global Leader
            </div>
          </div>

          <div className="outer-box" style={{marginLeft:'3%'}}>
            <div className="inner-box6">
              <img src={Display6} alt="" className="display6" />
            </div>
            <div className="inner-box-container6">
              BETTY NILSON
              <br />
              Creative Leader
            </div>
          </div>
        </div>

        <div className="row">
        <div>
          <p>Our way</p>
          <p>
            Our team is committed to making a positive impact for our
            clients,their users, and our community
          </p>

          <div className="our-way">
            <p className="our-way-heading">Our Way</p>
            <p className="our-way-text">
              Our team is committed to making a positive impact for our clients,
              their users, and our community.
            </p>
            <div className="our-way-cards">
              <div className="our-way-card">
              
                <div className="orange-circle"></div>
                <div className="our-way-content">
                  <p>
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p>
                </div>
              </div>
              <div className="our-way-card">
                <div className="orange-circle">
                 
                </div>
                <div className="our-way-content">
                  <p>
                    {" "}
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p>
                </div>
              </div>
              <div className="our-way-card">
                <div className="orange-circle">
                  
                </div>
                <div className="our-way-content">
                  <p>
                    {" "}
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p>
                </div>
              </div>
              <div className="our-way-card">
                <div className="orange-circle">
                  
                </div>
                <div className="our-way-content">
                  <p>
                    {" "}
                    Podcasting operational change management inside of workflows
                    to establish a framework. Taking seamless key performance
                    indicators offline to maximise the long tail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Design;
