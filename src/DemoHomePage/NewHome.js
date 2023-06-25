import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/main.css";
import banner from "../images/BANNER.png";
import banner2 from "../images/BANNER 02.png";
import banner3 from "../images/BANNER 04.png";
import Rectangle from "../images/Rectangle 8.png";
import Rectangle2 from "../images/Rectangle 8 (1).png";
import Rectangle3 from "../images/Rectangle 8 (2).png";
import imigongo2 from "../images/imigongo2.png";
import imigongo from "../images/imigongo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSearch, faShoppingCart, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { faTwitter,faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function NewHome(props) {

  const [backenddata, SetBackenddata] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();
      SetBackenddata(data); 
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    fetchdata();
  }, []);
  
  return (
    <div className="root">
      <div className="header">
        <div className="header-container">
          <div className="container-nav">
            <div className="custom-nav-bar">
              
              <div className="custom-logo"></div>

              <div className="navigation-list">
                <ul className="unorderedlist">

                  <li><a>HOME</a></li>
                  <li><a>GALLERY</a></li>
                  <li><a>ABOUT US</a></li>
                  <li><a>CONTACT</a></li>
                  <li><a>BLOG</a></li>
                <FontAwesomeIcon icon={faSearch} size="md" color="white" style={{marginRight:'20px', marginLeft:'40px'}}/>
                <FontAwesomeIcon icon={faUser} size="md" color="white" />
                <FontAwesomeIcon icon={faShoppingCart} size="md" color="#9ACA3C" style={{marginLeft:'20px'}}/>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-text">
            <h1 style={{color:"white", fontSize: "34px",fontFamily: "Inter",fontWeight: "normal",textTransform: "uppercase"}}>
            Lorem ipsum dolor sit amet consectetur. Volutpat.
            </h1>
            <button style={{marginTop:"25px"}}>Get Started</button>
          </div>
        </div>
      </div>
      <div className="jumbo">
        <div className="jumbo-container">
            <div className="jumbo-container-text">
            <h3>
            aBOUT Lorem ipsum
            </h3>
            <hr/>
            <p>
                Lorem ipsum dolor sit amet consectetur. Blandit dolor eu enim ac nisl enim sed diam. Egestas integer bibendum sapien dignissim sit felis pharetra nibh. Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo. Id molestie neque vel interdum aliquam vitae at euismod. Convallis consectetur sit mauris augue. Tempor rhoncus aenean dolor vitae.
                Tellus erat aliquam blandit etiam. Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. Sodales interdum aenean in dolor risus leo at. Praesent laoreet tincidunt malesuada eu adipiscing. Adipiscing posuere ultrices gravida duis iaculis sagittis ipsum convallis. Sed amet ac eleifend enim. Massa fringilla maecenas odio imperdiet imperdiet. Luctus at viverra.

            </p>
            </div>
            
            </div>
      </div>
      <div className="mission">
        {backenddata.map(item=>(
        <div className="mission-row" key={item.id} >
            <div style={{width:'30%', margin:5 , padding: 5}}>
                <h3 style={{}}>
                  Mission
                </h3>
                <hr/>
                <p>
                  {item.mission}
                </p>
            </div>
            <div style={{width:'30%', margin:5, padding: 5}}>
                <h3>
                  Vission
                </h3>
                <hr/>
                <p>
                  {item.vision}
                </p>
            </div>
            <div style={{width:'30%', margin:5, padding: 5}}>
                <h3>
                  Objectives
                </h3>
                <hr/>
                <p>
                  {item.objectives}
                </p>
            </div>
            <div style={{paddingTop:10}}>
              <h3>Tellus erat aliquam <br/> blandit etiam</h3>
              <hr/>
            </div>
        </div>
        ))}
      </div>
      {/* Ads */}
      <div className="mission">
        <div className="mission-row">
            <div style={{width:'32%', margin:5}}>
                {/* <p>Picture</p> */}
              <img src={banner3} alt="Avatar" style={{width:'100%', height:'100%', borderRadius:10}}/> 
            </div>
            <div style={{width:'32%', margin:5}}>
              <img src={banner2} alt="Avatar" style={{width:'100%', height:'100%', borderRadius:10}}/> 
            </div>
            <div style={{width:'32%', margin:5}}>
              <img src={banner} alt="Avatar" style={{width:'100%', height:'100%', borderRadius:10}}/> 
            </div>

        </div>
      </div>
      {/* More */}
      <div className="more">
        <div className="more-top-image">
        <img src={imigongo2} alt="Avatar" style={{width:'100%', height:'100%',marginTop:'-34px', marginLeft:'-32px', objectFit:'cover'}}/>
        </div>
        <div className="more-container">
          <div className="more-container-text-frame">
          <div className="frame8">
            <h4>Lorem ipsum dolor sit consectetur.</h4>
            <br/>
            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
            <button style={{marginTop:'30px'}}>Lorem ipsum</button>
          </div>
          <div className="frame25">
            <h4>Lorem ipsum dolor sit consectetur.</h4>
            <br/>
            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
            <button style={{marginTop:'30px'}}>Lorem ipsum</button>
          </div>
          </div>
        </div>
        <div className="more-bottom-image">
        <img src={imigongo} alt="Avatar" style={{width:'100%', height:'100%',marginTop:'12px', marginLeft:'-32px', objectFit:'cover'}}/>
        </div>
      </div>
      <div className="news">
      <div className="news-container">
      <div>
          <h3>LATEST STORIES AND UPDATES</h3>
          <hr/>
      </div>
      </div>
      </div>
      <div className="mission">
        <div className="mission-row">
        <div class="custom-card">
            <div style={{width:"100%", height:"70%"}}>
            <img src={Rectangle} alt="Avatar" style={{width:'100%', height:'100%', borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}/>
            </div>
            <div class="custom-card-container">
                <h3>Blandit dolor eu enim ac nisl enim sed diam.</h3> 
                <br/>
                <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p> 
                <div></div>
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#00AAE5" style={{paddingBottom:'5px'}}/>

            </div>
            </div>

            <div class="custom-card">
            <div style={{width:"100%", height:"70%"}}>
            <img src={Rectangle2} alt="Avatar" style={{width:'100%', height:'100%', borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}/>
            </div>
            <div class="custom-card-container">
                <h3> Egestas integer bibendum sapien</h3> <br/>
                <p>
                Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.
                </p> 
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#00AAE5" style={{paddingBottom:'5px'}}/>

            </div>
            </div>


           
            <div class="custom-card">
            <div style={{width:"100%", height:"70%"}}>
            <img src={Rectangle3} alt="Avatar" style={{width:'100%', borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}/>
            </div>
            <div class="custom-card-container">
                <h3>Blandit dolor eu enim ac nisl enim. </h3> <br/>
                <p>
                Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.
                </p> 
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#00AAE5" style={{paddingBottom:'5px'}}/>
                <div></div>
            </div>
            </div>
            <div style={{width:'100%',textAlign:'center',padding:'8px'}}>
              <button>View more</button>
            </div>
        </div>
      </div>
      <div className="footer-div">
        <div className="footer-row">
            <div className="footer-col" style={{width:'100%',margin:'2px'}}>
                <h3>Subscribe to our weekly newsletter </h3>
                <br/>
                <form style={{display:'flex'}}>
                <input type="text" placeholder="email" 
                style={{borderRadius: '33px',border: '1px solid #D1D1D1',opacity: '0.800000011920929',background: '#FFF', width:"160px", height:'26px', paddingLeft:'20px'}}/>
                <button type="submit">submit</button>
                </form>
            </div>
            <div className="footer-col" style={{width:'100%',margin:'2px'}}>
                <h3 style={{paddingLeft:'40px'}}>
                  Reach Us
                </h3>
                <br/>
                <ul className="footer-ul">
                  <li><a>Home</a></li>
                  <li><a>Gallery</a></li>
                  <li><a>About Us</a></li>
                  <li><a>Contact us</a></li>
                  <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="footer-col" style={{width:'100%',margin:'2px'}}>
                <h3 style={{paddingLeft:'40px'}}>
                  Be social
                </h3>
                <br/>
                <ul className="footer-ul">
                
                  <li><FontAwesomeIcon icon={faFacebook} size="md" color="#006198" style={{marginRight:'4px'}}/><a>
                  Facebook</a>
                  </li>
                  <li><FontAwesomeIcon icon={faTwitter} size="md" color="#006198" style={{marginRight:'4px'}}/><a>Twitter</a></li>
                  <li><FontAwesomeIcon icon={faLinkedin} size="md" color="#006198" style={{marginRight:'6px'}}/><a>Linkedin</a></li>
                  <li><FontAwesomeIcon icon={faYoutube} size="md" color="#006198" style={{marginRight:'4px'}}/><a>YouTube Channel</a></li>
                </ul>
            </div>
            <div className="footer-col" style={{width:'100%',margin:'2px'}}>
                <h3 style={{paddingLeft:'40px'}}>
                  Quick Links
                </h3>
                <br/>
                <ul className="footer-ul">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                  <li><a>Link 3</a></li>
                  
                </ul>
            </div>
        </div>
        <hr/>
        <div>
          <div className="footer-bottom" style={{textAlign:"center",color: "#006198"}}>
            <p> <i>© 2023 Rwanda, All right Reserved. </i> | Privacy policy</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewHome;
