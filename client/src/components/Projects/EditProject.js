import React, { Component } from "react";
import styled from "styled-components";

class EditProject extends Component {
  state = {
    project: {
      name: "",
      proImg: "",
      subcon: ""
    }
  };

  render() {
    return (
      <div>
        <H1>Edit Page</H1>
        <Form />
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
  font-size: 10vh;
`;
