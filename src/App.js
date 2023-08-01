import "./App.css";
import Home from "./home";
import Test from "./test";
import Recommend from "./recommend";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">리핏</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"></Nav.Link>
              <Nav.Link href="/test">Test</Nav.Link>
              <Nav.Link href="/recommend">Recommend</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/recommend" element={<Recommend />}></Route>
      </Routes>
    </div>
  );
}

export default App;
