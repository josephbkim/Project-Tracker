import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Img = styled.img`
  display: flex;
  height: 30vw;
  width: 40vw;
  justify-content: center;
  margin: 3vw auto;
  border: 4px solid #a0b1b5;
  border-radius: 10px;
`;
