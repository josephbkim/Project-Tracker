import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class ThisProject extends Component {
  state = {
    project: {
      name: "",
      subcon: []
    }
  };

  componentDidMount = () => {
    this.getThisProject();
  };

  getThisProject = () => {
    const projectId = this.props.match.params.projectId;
    axios.get(`/api/projects/${projectId}`).then(res => {
      this.setState({ project: res.data });
    });
  };

  projectDelete = () => {
    const projectId = this.props.match.params.projectId;
  };

  render() {
    return (
      <ThisProDiv>
        <div>
          <H1>{this.state.project.name}</H1>
        </div>
        <ButtDiv>
          <button class="button is-light">Update</button>
          <button class="button is-light">Delete</button>
        </ButtDiv>
      </ThisProDiv>
    );
  }
}

export default ThisProject;

const ThisProDiv = styled.div`
  display: inline-block;
  width: 30vw;
`;

const ButtDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: 5vh;
  color: #439fb5;
`;
