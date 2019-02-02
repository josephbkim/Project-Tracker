import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage";
import ProjectsList from "./components/Projects/ProjectsList";
import ThisProject from "./components/Projects/ThisProject";
import AddProject from "./components/Projects/AddProject";
import SubCon from "./components/Subs/SubCon";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
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
                <Route
                  exact
                  path="/projects/:projectId/subs"
                  component={SubCon}
                />
                <Route exact path="/projects/:projectId/subs/edit" />
              </Switch>
            </Contents>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;

const Contents = styled.div`
  padding: 5vh 0px;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  width: 100vw !important;
  margin: auto;
  padding: 0;
  background-color: #2f3436;
  background-size: 100%;
  /* position: absolute; */
  /* border: solid 3px yellow; */
`;

// const Button = styled.button`
//   background-color: #4b7782;
//   font-family: "Noto Serif", serif;
// `;
