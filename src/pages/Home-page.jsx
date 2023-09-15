import React from "react";
import Navbar from "../components/navbar"
import cover from "../assets/home_assets/HOME PAGE COVER IMAGE.png";
import background from "../assets/home_assets/Rectangle 632.png";
import whatsapp from "../assets/home_assets/whatsapp.jpg";
import call from "../assets/home_assets/call.png";
import our_vision_section1 from "../assets/home_assets/OUR_VISION_SECTION_1.png";
import our_vision_section2 from "../assets/home_assets/OUR_VISION_SECTION_2.png";
import our_vision_section3 from "../assets/home_assets/OUR_VISION_SECTION_3.png";
import teific_logo from "../assets/home_assets/teific.png";
import carzilla_logo from "../assets/home_assets/carzila 1.png";
import know_more_top_left from "../assets/home_assets/thubnail.png";
import know_more_top_right from "../assets/home_assets/icon 3 1.png";
import know_more_bottom_left from "../assets/home_assets/icon 2 2.png";
import know_more_bottom_right from "../assets/home_assets/thumb.png";
import why_choose_us_upper_left from "../assets/home_assets/know_upper.png";
import why_choose_us_upper_right from "../assets/home_assets/fast-time 1.png";
import why_choose_us_lower_left from "../assets/home_assets/w6 2.png";
import why_choose_us_lower_right from '../assets/home_assets/ambulance.png';
import coming_soon_app from '../assets/home_assets/mobile_view.png';
import why_we_come_upper_left from '../assets/home_assets/1.jpeg'
import why_we_come_upper_mid from '../assets/home_assets/2.jpeg'
import why_we_come_upper_right from '../assets/home_assets/3.png'
import why_we_come_lower from '../assets/home_assets/4.jpeg'


 




const Home = () =>{
    return(
        <>
    <Navbar/>
{/* <!-- nav bar ends here --> */}
{/* <!-- first section --> */}
    <div className="top">
        <div className="left">
            <a href="/inactive url" id="ambuvians">AMBUvians</a>
            <a href="/inactive url" id="slogan">India's First One-Stop Solution of all medical problems</a>
            <button id="facts">FACTS</button>
        </div>
        <div className="right">
            <div className="ambulance">
                <img id="am" src={cover} alt="ambulance"/> 
                <img id="bg" src={background} alt=""/>  
            </div>
    </div>
      </div>
{/* <!-- first section ends here --> */}
{/* <!-- reach-out section fixed in the bottom left corner --> */}
    <div className="whatsapp">
        <img src={whatsapp} alt="whatsapp"/>
        <img src={call} alt="call" id="call"/>
    </div>
{/* <!-- reach-out section ends here --> */}
{/* <!-- Our vision section --> */}
    <div className="vision">
        <a href="/inactive url" id="our-vision">OUR VISION</a>
        <div className="vision_img">
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section1} alt=""/>
                  <a href="/inactive url" id="section-upper-text">INDIA's best</a>
                  <a href="/inactive url" id="section-lower-text">Medical SERVICE</a>
                </div>
                <div className="sectionback">
                  text to be added
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section2} alt=""/>
                  <a href="/inactive url" id="section-upper-text">Saving Life</a>
                  <a href="/inactive url" id="section-lower-text">with Perfection</a>
                </div>
                <div className="sectionback">
                  texxt to be added
                </div>
              </div>
            </div>
            <div className="section">
              <div className="sectioncard">
                <div className="sectionfront">
                  <img src={our_vision_section3} alt=""/>
                  <a href="/inactive url" id="section-upper-text">Economical and</a>
                  <a href="/inactive url" id="section-lower-text">Fastest</a>
                </div>
                <div className="sectionback">
                  text to be added
                </div>
              </div>
            </div>
        </div>
    </div>
{/* <!-- our vision section ends here --> */}
{/* <!-- know more section --> */}
    <div className="knowmore">
      <div className="know">
        <img id="one" src={know_more_top_left} alt=""/>
        <img id="two" src={know_more_top_right} alt=""/>
        <img id="three" src={know_more_bottom_left} alt=""/>
        <img id="four" src={know_more_bottom_right} alt=""/>
        <button id="more">Know more</button>
      </div>
    </div> 
{/* <!-- Why choose us section --> */}
    <div className="choose">
      <a href="/inactive url" id="why_us">Why Choose Us?</a>
      <div className="low">
        <div className="partone">
          <div className="one">
            <abbr><img src={why_choose_us_upper_left} alt=""/></abbr>
            <a href="/inactive url">Patient is our first priority</a>
          </div>
          <div className="two">
            <abbr><img src={why_choose_us_upper_right} alt=""/></abbr>
            <a href="/inactive url">Emergency response time <br/>of 15 minutes or less</a>
          </div>
        </div>
        <div className="parttwo">
          <div className="three">
            <abbr ><img src={why_choose_us_lower_left} alt=""/></abbr>
            <a href="/inactive url">24/7 Support</a>
          </div>
          <div className="four">
            <abbr ><img src={why_choose_us_lower_right} alt=""/></abbr>
            <a href="/inactive url">Customise and Reliable <br/>Ambulance Service</a>
          </div>
        </div>
      </div>
    </div>
{/* <!-- Why choose us section ends here   --> */}
{/* <!-- coming soon --> */}
    <div className="coming">
      <div className="left_img">
        <img src={coming_soon_app} alt=""/>
      </div>
      <div className="right_txt">
        <a href="/inactive url">COMING</a>
        <a href="/inactive url">SOON</a>
      </div>
    </div>
{/* <!-- coming soon section ends here --> */}
{/* <!-- Why we come section --> */}
    <div className="come">
      <a href="/inactive url">Why We Come</a>
    </div>
    <div className="whywecome">
      <div className="news1">
        <img src={why_we_come_upper_left} alt=""/>
        <img src={why_we_come_upper_mid} alt=""/>
        <img src={why_we_come_upper_right} alt=""/>
      </div>
      <div className="news2">
        <img src={why_we_come_lower} alt=""/>
      </div>
    </div>
{/* <!-- why we come section ends here --> */}
{/* <!-- director's note --> */}
    <div className="note">
      <div className="leftnote">
        <div className="card">
          <div className="front">
          </div>
          <div className="back">
            <p>text to be added here</p>
          </div>
        </div>
      </div>
      <div className="rightnote">
        <a href="/inactive url" id="dir">Director's Note</a>
        <a href="/inactive url" id="yash">Mr.Yash Kumar Goel</a>
        <a href="/inactive url" id="ed">Founder & Executive Director</a>
        <a href="/inactive url" id="aim">Our aim is to provide top-notch facilities to patients in need.
          Our dedicated team works tirelessly 24/7 to ensure their well-being.
        </a>
        <a href="/inactive url" id="good">"Good health is true wealth"</a>
        <a href="/inactive url" id="mr">-Yash Kumar Goel</a>
      </div>
{/* <!-- director's note ends here --> */}
{/* <!-- Our partners --> */}
    </div>
    <div className="ourPartners">
      <a href="/inactive url">Our Partners</a>
    </div>
    <div className="partners">
      <img src={teific_logo} alt=""/>
      <img src={carzilla_logo} alt=""/>
    </div>
    {/* <!-- our partners section ends here --> */}
    {/* <!-- Subscribe to our mail --> */}
    <div className="submail">
      <a href="/inactive url" id="subscribe">SUBSCRIBE TO OUR MAIL</a>
      <a href="/inactive url" id="tips">Get a free subscription to our health and fitness tip and stay tuned to our latest offers</a>
      <div className="emails"> 
        <input required type="email" placeholder="Email" id="inputmail"/>
        <button id="arrow"><i class='fa fa-arrow-right fa-2x'></i></button>
      </div>
      <div className="or">
        <hr id="hrone"/>
        <h2 id="h2">OR</h2>
        <hr id="hrone"/>
      </div>
      <div className="numbers">
        <input required type="tel" placeholder="Phone Number" id="inputmail"/>
        <button id="arrow"><i class='fa fa-arrow-right fa-2x'></i></button>
      </div>
    </div>
{/* <!-- mail section ends here --> */}
{/* <!-- Footer Section --> */}
<div className="footer">
    {/* <!-- Footer Main Header Section --> */}
     <div className="footer-header">
      <div className="footer-img">
        <img src="../../public/assets/home_assets/india.png" alt="" />
      </div> 
      {/* <!-- footer quote --> */}
      <div className="ambu-footer-quote">
        <h3>India's First Unified Health Care Software</h3>
      </div>
    </div> 
    {/* <!-- Reach Us section --> */}
    <div className="us">
      <div className="know-us">
        <h2>Know Us</h2>
        <p><a href="/inactive url">HOME</a></p>
        <p><a href="/inactive url">Profile</a></p>
        <p><a href="/inactive url">About Us</a></p>
        <p><a href="/inactive url">Services</a></p>
      </div>
      <div className="services">
        <h2>Services</h2>
        <p><a href="/inactive url">ALS Ambulance</a></p>
        <p><a href="/inactive url">BLS Ambulance</a></p>
        <p><a href="/inactive url">PTS Ambulance</a></p>
        <p><a href="/inactive url">Mortality Ambulance</a></p>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="address">
          <abbr title="Company address">
            <img src="../../public/assets/home_assets/google-maps.png" alt="" />
          <p><a href="/inactive url" className="add">XYZ ABC Technology Business Incubation Uttar Pradesh India</a></p></abbr>
        </div>
        <div className="mail">
          <abbr title="Comapany email-Id">
            <img src="../../public/assets/home_assets/gmail.png" alt=""
          />
          <p><a href="/inactive url">ambu272008@gmail.com</a></p></abbr> 
        </div>
        <div className="phone">
          <abbr title="Company contact number">
            <img src="../../public/assets/home_assets/telephone.png" alt=""
          />
          <section>
            <p><a href="/inactive url">9856473456</a></p>
            <p><a href="/inactive url">6885647375</a></p>
          </section></abbr>
        </div>
      </div>
    </div> 
    {/* <!-- Connect Us Section --> */}
    <div className="connect">
      <p>Connect With Us</p>
      <div className="icons">
        <abbr title="instagram" className="first-icon">
          <a href="/inactive url"><img src="../../public/assets/home_assets/instagram.png" alt="" /></a>
        </abbr>
        <abbr title="whatsapp"  className="second-icon">
          <a href="/inactive url"><img src="../../public/assets/home_assets/whatsapp.jpg" alt="" /></a>
        </abbr>
        <abbr title="twitter" className="third-icon">
          <a href="/inactive url"><img src="../../public/assets/home_assets/twitter.png" alt="" /></a>
        </abbr>
        <abbr title="linkedin" className="fourth-icon">
          <a href="/inactive url"><img src="../../public/assets/home_assets/linkedin.png" alt="" /></a>
        </abbr>
      </div>
    </div> 
    {/* <!-- Download section --> */}
    <div className="download">
      <div className="appstore">
      <abbr title="app-store">
          <img src="../../public/assets/home_assets/app-store.jpg" alt="app store"
        />
      </abbr>
      </div>
      <div className="playstore">
      <abbr title="play-store">
          <img src="../../public/assets/home_assets/play-store.png" alt="play store"
        />
      </abbr>
      </div>
    </div> 
    {/* <!-- Copyright Section --> */}
    <div className="copyright">
      <p>copyright @2023 AMBU Organisation</p>
    </div>
  </div> 
        </>
    )
}
export default Home;