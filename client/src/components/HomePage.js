import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgBox = styled.div`
  display: flex;
  height: 30vw;
  width: 45vw;
  margin: 20px auto;
  justify-content: center;
  padding: 15px;
  background-color: cornsilk;
  border: 2px solid sienna;
  border-radius: 5px;
`;

const Img = styled.img`
  display: flex;
  /* height: 100%; */
  width: 100%;
  justify-content: center;
  margin: auto;
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the HomePage</h1>
        <ImgBox>
          <Link to="/projects">
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdwoizV5acCeSIxDL-tYfitLT39a78ms1rcezjbCfKHJWmbDa"
              alt="Const Image"
            />
          </Link>
        </ImgBox>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <ImgBox>
          <Link to="/projects">
            <Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdwoizV5acCeSIxDL-tYfitLT39a78ms1rcezjbCfKHJWmbDa"
              alt="Const Image"
            />
          </Link>
        </ImgBox>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
