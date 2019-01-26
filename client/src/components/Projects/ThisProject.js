import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <h1>This is this Project Page</h1>
        {this.state.project.name}
      </div>
    );
  }
}

export default ThisProject;
