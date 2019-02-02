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
          <Button className="button is-black is-large">Projects</Button>
        </Link>
      </HomeDiv>
    );
  }
}

export default HomePage;

const HomeDiv = styled.div`
  font-family: "Noto Serif", serif;
  font-weight: bold;
  height: 100vw;
  color: whitesmoke;
  font-size: 4.5vh;
`;

const Button = styled.button`
  font-family: "Noto Serif", serif;
  margin: 3px;
`;
