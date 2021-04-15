import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import background from './background/doodle-icon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarf from './components/nav';
import selectionpg from './components/selection';



const backgroundImg = {
  width: 'fill',
  height: '150vh',
  background: 'no-repeat',
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // opacity: '0.08',
};

function App() {
  return (
    <div className="App" style={backgroundImg}>
                <Navbarf></Navbarf>
        <Jumbotron className="App-header">

          <h1>OVERNIGHT</h1>
        </Jumbotron>
      <Container>
        {/* Grid System */}
        <Row className="justify-content-md-center companyName">
          <Col md={5}><h1>LEGENDS</h1></Col>
        </Row>
        {/* Introduction Content */}
        <Row className="justify-content-md-center introduction">
          <Col></Col>
          <Col xs={6} className="introScript">
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
          </Col>
          <Col className="introImg">EXAMPLE EMOTE GOES HERE</Col>
        </Row>
        {/* Selection for User */}
        <Row className="justify-content-md-center selections">
          <selectionpg></selectionpg>
        </Row>
      </Container>
    </div>

    // <div className="App" style={backgroundImg}>
    //     <Jumbotron className="App-header">
    //       <h1>OVERNIGHT</h1>
    //     </Jumbotron>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col md-3">
    //           <p>1 of 3</p>
    //         </div>
    //       </div>
    //     </div>
    // </div>





    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
