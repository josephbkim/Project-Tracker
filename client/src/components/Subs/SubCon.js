import React, { Component } from "react";
import axios from "axios";

class SubCon extends Component {
  state = {
    project: {
      subcon: [
        {
          name: "",
          trade: ""
        }
      ]
    }
  };

  componentDidMount = () => {
    this.getAllSubs();
  };

  getAllSubs = () => {
    const projectId = this.props.match.params.projectId;
    axios
      .get(`/api/projects/${this.state.project._id}/subs`)
      .then(res => this.setState({ project: res.data }));
  };

  render() {
    return (
      <div>
        <h1>Project Subcontractors</h1>
        {this.state.project.subcon.map((subs, i) => (
          <div key={i}>{this.state.project.subs}</div>
        ))}
      </div>
    );
  }
}

export default SubCon;
