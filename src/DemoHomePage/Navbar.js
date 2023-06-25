import {Container,Nav, Navbar} from 'react-bootstrap';
import '../css/Navbar.css'
// import {LogInPage} from 'Frontend\src\pages\loginPage.js';

export const Navigationbar = (props) => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="=dark" variant="light" >
      <Container className='nav-container' >
      <div className='empty'></div>

        <Navbar.Brand href="#home">
          {/* <img alt="" src="https://res.cloudinary.com/auca/image/upload/v1678191064/logo2_ek75yb.png" /> */}
          <p>Show me you </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className= "me-auto navbar-link" style={{color:'#000000'}}>
            <Nav.Link href="/" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Dashboard">Home</Nav.Link>
            <Nav.Link href="/LandingPageCourses" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Discussions">Courses</Nav.Link>
            <Nav.Link href="#paterns" style={{color:'#000000', fontSize:'0.8rem'}} className="navbar-Discussions">Partners</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}