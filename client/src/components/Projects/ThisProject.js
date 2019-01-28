import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

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
    },
    upFormVisible: false
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
    axios
      .delete(`/api/projects/${projectId}`)
      .then(() => this.props.history.goBack());
  };

  toggleUpForm = () => {
    this.setState({ upFormVisible: !this.state.upFormVisible });
  };

  render() {
    return (
      <ThisProDiv>
        <div>
          <H1>Project Name: {this.state.project.name}</H1>
          <Img src={this.state.project.proImg} alt="Project Image" />
          <Par>Image Url: {this.state.project.proImg}</Par>
          <Par>
            SubContractors:
            {this.state.project.subcon.map((sub, i) => (
              <div key={i}> {sub.name}</div>
            ))}
          </Par>
        </div>
        <ButtDiv>
          <button
            className="button is-link is-medium"
            onClick={this.toggleUpForm}
          >
            Update
          </button>
          {this.state.upFormVisible ? (
            <EditProject
              getThisProject={this.getThisProject}
              toggleUpForm={this.toggleUpForm}
              projectId={this.state.project._id}
            />
          ) : null}
          <button
            className="button is-link is-medium"
            onClick={this.projectDelete}
          >
            Delete
          </button>
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

const Par = styled.div`
  padding-left: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-wrap: normal;
`;
