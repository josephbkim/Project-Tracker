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
          <button className="button is-link is-medium">Projects</button>
        </Link>
      </HomeDiv>
    );
  }
}

export default HomePage;

const HomeDiv = styled.div`
  font-family: "Noto Serif", serif;
  height: 100vw;
  color: white;
  font-size: 5vh;
`;
