import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HmProImg from "./ImgComp/HmProImg";

class HomePage extends Component {
  render() {
    return (
      <HomeDiv>
        <h1>Project Tracker</h1>
        <HmProImg />
        <Link to="/projects">
          <Button className="button is-link is-medium">Projects</Button>
        </Link>
      </HomeDiv>
    );
  }
}

export default HomePage;

const HomeDiv = styled.div`
  font-family: "Noto Serif", serif;
  height: 100vw;
  color: #439fb5;
  font-size: 5vh;
`;

const Button = styled.button`
  background-color: #4b7782;
  font-family: "Noto Serif", serif;
`;
