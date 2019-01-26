import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>This is the HomePage</h1>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
