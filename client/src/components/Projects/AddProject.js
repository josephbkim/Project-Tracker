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

  handleChange = event => {
    const newProState = { ...this.state.project };
    newProState[event.target.name] = event.target.value;
    this.setState({ project: newProState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const theGoods = this.state.project;
    axios.post("/api/projects", theGoods).then(res => {
      this.props.history.goBack();
    });
  };

  render() {
    return (
      <Div>
        <H1>Add New Project</H1>
        <Form onSubmit={this.handleSubmit}>
          <div className="field">
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
          <Button type="submit" className="button is-black is-medium">
            Submit
          </Button>
        </Form>
      </Div>
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

const Button = styled.button`
  font-family: "Noto Serif", serif;
`;

const Div = styled.div`
  height: 100vh;
`;
