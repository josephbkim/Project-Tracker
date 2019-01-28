import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage";
import ProjectsList from "./components/Projects/ProjectsList";
import ThisProject from "./components/Projects/ThisProject";
import AddProject from "./components/Projects/AddProject";

class App extends Component {
  render() {
    return (
      <Container className="container">
        <Router>
          <div>
            <NavBar />
            <Contents>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/projects" component={ProjectsList} />
                <Route
                  exact
                  path="/projects/addproject"
                  component={AddProject}
                />
                <Route
                  exact
                  path="/projects/:projectId"
                  component={ThisProject}
                />
              </Switch>
            </Contents>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;

const Contents = styled.div`
  height: 100vw;
  text-align: center;
`;

const Container = styled.div`
  background-color: #2f3436;
  position: absolute;
`;
