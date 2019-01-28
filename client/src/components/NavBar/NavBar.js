import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    return (
      <NavDiv>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/projects/addproject">Add New Project</Link>
      </NavDiv>
    );
  }
}

export default NavBar;

const NavDiv = styled.div`
  display: flex;
  height: 3vh;
  /* width: 100%; */
  background-color: #a0b1b5;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  padding: 0px;
  top: 0px;
  /* position: fixed; */
`;
