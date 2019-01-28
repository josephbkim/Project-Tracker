import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HmProImg from "./ImgComp/HmProImg";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Project Tracker</h1>
        <HmProImg />
        <Link to="/projects">
          <button className="button is-link is-medium">Projects</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
