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
        <div>
          <Link to={`/projects/${this.props.project._id}`}>
            <img src={this.props.project.proImg} alt="project image" />
          </Link>
        </div>
      </div>
    );
  }
}

export default HmProImg;
