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
    let newProState = { ...this.state.project };
    console.log(newProState);
    newProState.name = document.getElementById("name").defaultValue;
    newProState.proImg = document.getElementById("proImg").defaultValue;
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
      <EditPro>
        <H1>Edit Project</H1>
        <Form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                defaultValue={this.props.projName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Image Url"
                name="proImg"
                id="proImg"
                defaultValue={this.props.projImg}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button type="submit" className="button is-link is-medium">
            Submit
          </button>
        </Form>
      </EditPro>
    );
  }
}

export default EditProject;

const Form = styled.form`
  width: 30vw;
  margin: auto auto;
`;

const H1 = styled.h1`
  color: white;
  font-size: 5vh;
`;

const EditPro = styled.div`
  font-family: "Noto Serif", serif;
`;
