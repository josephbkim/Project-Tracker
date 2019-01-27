import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class ThisProject extends Component {
  state = {
    project: {
      name: "",
      proImg: "",
      subcon: [
        {
          name: ""
        }
      ]
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
          <H1>Project Name: {this.state.project.name}</H1>
          <Img src={this.state.project.proImg} alt="Project Image" />
          <p>Image Url: {this.state.project.proImg}</p>
          <p>
            SubContractors:
            {this.state.project.subcon.map((sub, i) => (
              <div key={i}>
                <p>{sub.name}</p>
              </div>
            ))}
          </p>
        </div>
        <ButtDiv>
          <button className="button is-light">Update</button>
          <button className="button is-light">Delete</button>
        </ButtDiv>
      </ThisProDiv>
    );
  }
}

export default ThisProject;

const ThisProDiv = styled.div`
  color: white;
  margin: 10vh auto;
  display: inline-block;
  width: 35vw;
`;

const ButtDiv = styled.div`
  margin: 3% 0;
  display: flex;
  justify-content: space-around;
`;

const H1 = styled.h1`
  padding-left: 3vw;
  display: flex;
  font-size: 2vh;
  color: #439fb5;
  justify-content: flex-start;
`;

const Img = styled.img`
  display: flex;
  width: 30vw;
  justify-content: center;
  margin: 0 auto;
  border: 4px solid lightgrey;
  border-radius: 10px;
`;
