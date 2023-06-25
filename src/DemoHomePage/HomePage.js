import React from "react";
import "../css/Homepage.css";
import background_img from "../images/background_img.png";
import card1 from "../images/card1.png";
import banner from "../images/BANNER.png";
import banner2 from "../images/BANNER 02.png";
import banner4 from "../images/BANNER 04.png";
import Rectangle8 from "../images/Rectangle 8.png";
import Rectangle9 from "../images/Rectangle 8 (1).png";
import Rectangle10 from "../images/Rectangle 8 (2).png";
import { Container, Row, Col, Card, CardImg, Button, Form} from 'react-bootstrap';
import { Navigationbar } from "../DemoHomePage/Navbar.js"; 



function HomePage() {
  return (
<>

    <Container className="containerPage">
    {/* <Navigationbar/>   */}

      <img src={background_img} alt="logo" style={{ width: '100%', height: '100%'}} />
      {/* Add your content here */}
      <div  className="Content">
        <div className="jumbotron">
          {/* Add content in the center of the jumbotron */}
          <h2>Lorem ipsum dolor sit amet consectetur.<br/> Volutpat.</h2>
        </div>
        <div className="card-container">
          <Card className="mx-auto" style={{ maxWidth: '400px'}}>
            <CardImg src={card1} alt="logo" className="img-fluid" />
            <div className="card-body text-center">
              {/* <h5 className="card-title">Welcome to the website!</h5>
              <p className="card-text">This is a website for the project.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-content">
              <Row className="card-row" style={{marginLeft: "50px"}}>
                <Col>
                  {/* Content for the first column */}
                  <h2>Mission</h2>
                  <hr/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam, nisl quis tincidunt aliquam, nunc nisl aliquet nunc,
                    vitae aliquam nisl nunc vitae nisl. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                  </p>
                </Col>
                <Col>
                  {/* Content for the second column */}
                  <h2>Vision</h2>
                  <hr/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam, nisl quis tincidunt aliquam, nunc nisl aliquet nunc,
                    vitae aliquam nisl nunc vitae nisl. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                  </p>
                </Col>
                <Col>
                  {/* Content for the third column */}
                  <h2>Objective</h2>
                  <hr/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam, nisl quis tincidunt aliquam, nunc nisl aliquet nunc,
                    vitae aliquam nisl nunc vitae nisl. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                  </p>
                </Col>
              </Row>
          </div>
          <div style={{marginLeft: "60px", padding:"10px"}}>
            <h2>Tellus erat aliquam <br/> blandit etiam</h2>
            <hr/>
          </div>
          <div style={{marginLeft: "30px", padding:"10px"}}>
            <Row className="card-row-custom">
              <Col>
                  <img src={banner4} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
              </Col>
              <Col>
                  <img src={banner2} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
              </Col>
              <Col>
                  <img src={banner} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
              </Col>
            </Row>
          </div>
          </Card>
        </div>
        <div className="imigongo">
          <Container>
            <Row>
              <Col>
                <p>
                  Imigongo is a traditional Rwandan art form that originated in the
                  18th century in the southeast of the country. The art form was
                  developed by the royal court of the Mwami (king) Yuhi III. It
                  involves the use of cow dung to create geometric shapes such as
                  squares, rectangles and circles on wooden boards. The dung is
                  mixed with natural soils of different colours such as white, red
                  and black. The dung is then applied to the wooden boards and
                  left to dry. Once dry, the boards are polished to reveal the
                  patterns. The art form is used to decorate the walls of houses
                  and other buildings. It is also used to decorate pottery and
                  other household items. The art form is also used to decorate
                  clothing and other items of clothing. The art form is also used
                  to decorate the walls of houses and other buildings. It is also
                  used to decorate pottery and other household items. The art form
                  is also used to decorate the walls of houses and other
                  buildings. It is also used to decorate pottery and other
                  household items. The art form is also used to decorate the
                  walls of houses and other buildings. It is also used to
                  decorate pottery and other household items. The art form is
                  also used to decorate the walls of houses and other buildings.
                  It is also used to decorate pottery and other household items.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="story">
          <Row>
            <Col>
              <div className="StoryUpdates"style={{marginLeft: "60px", padding:"10px"}}>
                <h2 style={{}}>
                  LATEST STORIES AND <br/> UPDATES</h2>
                <hr/>
              </div>
              <div style={{marginLeft: "30px", padding:"10px"}}>
                <Row className="card-row-custom">
                <Col>
                  <img src={Rectangle8} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
                  {/* <Card>
                    <Card.Img variant="top" src={banner4} style={{ borderRadius: "10px", border: "3px solid #9BD030" }} alt="logo" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Button</Button>
                    </Card.Body>
                  </Card> */}
                </Col>
                  <Col>
                      <img src={Rectangle9} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
                  </Col>
                  <Col>
                      <img src={Rectangle10} style={{borderRadius:"10px", border: "3px solid #9BD030"}} alt="logo"/>
                  </Col>
                </Row>
              </div>
              <div className="custom-button">
                <Button variant="primary" size="lg" style={{color: "#006198", textAlign: "center", fontSize: "17px", fontFamily: "Inter", textTransform: "lowercase"}}>View More</Button>
              </div>
            </Col>
          </Row>
        </div>
          <footer id="footer">
            <div class="foot-col-1">
              <div class="logo">
                <h3 style={{color:"#00305E", fontSize: "18px", fontFamily: "Open Sans",fontWeight: "600",lineHeight: "21.6px"}}>
                  Subscribe to our weekly <br/> newsletter </h3>
              </div>
              {/* <p>Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.</p> */}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button className="rounded-pill" variant="outline-primary">
                  Search
                </Button>
              </Form>
            </div>


              <div class="foot-col-2">
                <h4 style={{color:"#00305E", fontSize: "18px", fontFamily: "Open Sans",fontWeight: "600",lineHeight: "21.6px"}}>
                  Reach Us
                </h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>

              <div class="foot-col-3">
                <h4 style={{color:"#00305E", fontSize: "18px", fontFamily: "Open Sans",fontWeight: "600",lineHeight: "21.6px"}}>
                  Be Social
                </h4>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">YouTube Channel</a></li>
                </ul>
              </div>


            <div class="foot-col-4">
              <h3 style={{color:"#00305E", fontSize: "18px", fontFamily: "Open Sans",fontWeight: "600",lineHeight: "21.6px"}}>
                Quick links
              </h3>
              {/* <p>Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel hendrerit iriure dolor in hendrerit.</p> */}
              <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
            </div>
            <hr/>
            <div class="copyright" style={{color:"#006198", textAlign: "center", fontSize: "13px", fontFamily: "Open Sans", fontStyle: "italic", fontWeight: "300", lineHeight: "24px"}}>
              <p>© 2023 Rwanda, All right Reserved.  | Privacy policy.</p>
            </div>
          </footer>
      </div>
    </Container>

    </>
  );
}

export default HomePage;