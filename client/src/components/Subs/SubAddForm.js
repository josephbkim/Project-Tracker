import React, { Component } from "react";
import Axios from "axios";

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
    Axios.post(`/api/projects/${projectId}/subs`, theGoods).then(res => {
      this.props.getAllSubs();
      //   this.props.addFormToggle();
    });
  };

  render() {
    return (
      <div>
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
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default SubAddForm;
