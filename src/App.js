import "./App.css";
import { useState } from "react";
import sentence from "./real-sentence";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  let [quote, setQuote] = useState(sentence);
  let [btnCount, setBtnCount] = useState(0);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">리핏</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="day-sentence">
        <h3>{quote[btnCount].sentence}</h3>
        <h3>{quote[btnCount].interpretation}</h3>
      </div>
      <button
        className="prev"
        onClick={() => {
          {
            btnCount == 0 ? setBtnCount(btnCount) : setBtnCount(btnCount - 1);
          }
        }}
      >
        prev
      </button>
      <button
        className="next"
        onClick={() => {
          {
            btnCount <= quote.length
              ? setBtnCount(btnCount + 1)
              : setBtnCount(btnCount(quote.length));
          }
        }}
      >
        next
      </button>
    </div>
  );
}

// function DaySentence(props) {
//   return (
//     <div className="day-sentence">
//       <h4>{props.quote[props.btnCount].sentence}</h4>
//       <h4>{props.quote[props.btnCount].interpretation}</h4>
//     </div>
//   );
// }

export default App;
