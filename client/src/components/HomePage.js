import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HmProImg from "./ImgComp/HmProImg";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the HomePage</h1>
        <HmProImg />
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
