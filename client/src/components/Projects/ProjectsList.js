import React, { Component } from "react";
import axios from "axios";

class ProjectsList extends Component {
  state = {
    projects: [
      {
        name: "",
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
      .then(res => this.setState({ projects: res.data }));
  };

  render() {
    return (
      <div>
        <h1>This is the projects page</h1>
        {this.state.projects.map((project, i) => (
          <div key={i}>{project.name}</div>
        ))}
      </div>
    );
  }
}

export default ProjectsList;
