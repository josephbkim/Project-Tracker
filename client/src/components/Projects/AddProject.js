import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  state = {
    project: {
      name: String,
      proImg: String,
      subcon: []
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="name"
                name="name"
                value="this.state.project.name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="name"
                name="proImg"
                value="this.state.project.proImg"
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProject;
