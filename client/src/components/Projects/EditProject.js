import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class EditProject extends Component {
  state = {
    project: {
      name: "",
      proImg: ""
    }
  };

  handleChange = e => {
    const newProState = { ...this.state.project };
    newProState[e.target.name] = e.target.value;
    this.setState({ project: newProState });
  };

  handleSubmit = e => {
    e.preventDefault();
    const theGoods = this.state.project;
    const projectId = this.props.projectId;
    axios.put(`/api/projects/${projectId}`, theGoods).then(res => {
      this.props.getThisProject();
      this.props.toggleUpForm();
    });
  };

  render() {
    return (
      <div>
        <H1>Edit Project</H1>
        <Form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="name"
                name="name"
                value={this.state.project.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Url"
                name="proImg"
                value={this.state.project.proImg}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="button is-link is-medium">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default EditProject;

const Form = styled.form`
  width: 40vw;
  margin: auto auto;
`;

const H1 = styled.h1`
  color: white;
  font-size: 5vh;
`;
