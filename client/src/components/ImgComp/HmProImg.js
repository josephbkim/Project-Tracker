import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  display: flex;
  height: 30vw;
  width: 40vw;
  justify-content: center;
  margin: 3vw auto;
  border: 4px solid lightgrey;
  border-radius: 10px;
`;

class HmProImg extends Component {
  render() {
    return (
      <div>
        <Link to="/projects">
          <Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdwoizV5acCeSIxDL-tYfitLT39a78ms1rcezjbCfKHJWmbDa"
            alt="Const Image"
          />
        </Link>
      </div>
    );
  }
}

export default HmProImg;
