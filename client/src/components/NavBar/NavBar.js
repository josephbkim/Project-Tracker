import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  height: 3vh;
  width: 100%;
  background-color: #a0b1b5;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
`;

class NavBar extends Component {
  render() {
    return (
      <NavDiv>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/subcontractors">Subcontractors</Link>
      </NavDiv>
    );
  }
}

export default NavBar;
