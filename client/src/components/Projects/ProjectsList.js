import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

class ProjectsList extends Component {
  state = {
    project: [
      {
        name: "",
        proImg: "",
        subcon: []
      }
    ]
  };

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects = () => {
    axios
      .get(`/api/projects`)
      .then(res => this.setState({ project: res.data }));
  };

  render() {
    return (
      <div>
        <H1>This is the projects page</H1>
        {this.state.project.map((project, i) => (
          <div key={i}>
            <Link to={`/projects/${project._id}`}>
              <ProImg src={project.proImg} alt="project image" />
            </Link>
            <div>
              <Link to={`/projects/${project._id}`}>
                <button class="button is-link">{project.name}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsList;

const ProImg = styled.img`
  display: flex;
  height: 30vw;
  width: 40vw;
  background-color: black;
  justify-content: center;
  margin: 3vw auto;
  border: 4px solid lightgrey;
  border-radius: 10px;
`;

const H1 = styled.h1`
  font-size: 5vh;
  color: #439fb5;
`;
