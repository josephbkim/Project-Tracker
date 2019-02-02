import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class SubAddForm extends Component {
  state = {
    subcon: {
      name: "",
      trade: ""
    }
  };

  handleChange = event => {
    const newSubState = { ...this.state.subcon };
    newSubState[event.target.name] = event.target.value;
    this.setState({ subcon: newSubState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const projectId = this.props.projectId;
    const theGoods = this.state.subcon;
    axios.post(`/api/projects/${projectId}/subs`, theGoods).then(res => {
      this.props.getAllSubs();
      //   this.props.addFormToggle();
    });
  };

  render() {
    return (
      <FormDiv>
        <h1>Add New Sub</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.subcon.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Trade</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="trade"
                placeholder="Trade"
                value={this.state.subcon.trade}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="button is-black is-large">Submit</button>
        </form>
      </FormDiv>
    );
  }
}

export default SubAddForm;

const FormDiv = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;
