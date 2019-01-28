import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class AddProject extends Component {
  state = {
    project: {
      name: String,
      proImg: String,
      subcon: []
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
    axios.post("/api/projects", theGoods).then(res => {});
  };

  render() {
    return (
      <div>
        <H1>Add New Project</H1>
        <Form>
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
          <button className="button">Submit</button>
        </Form>
      </div>
    );
  }
}

export default AddProject;

const Form = styled.form`
  width: 40vw;
  margin: auto auto;
`;

const H1 = styled.h1`
  color: white;
  font-size: 10vh;
`;
