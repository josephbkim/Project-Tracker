import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

class ThisProject extends Component {
  state = {
    project: {
      name: "",
      proImg: "",
      subcon: [
        {
          name: "",
          trade: ""
        }
      ]
    },
    upFormVisible: false
  };

  componentDidMount = () => {
    this.getThisProject();
  };

  getThisProject = () => {
    const projectId = this.props.match.params.projectId;
    axios.get(`/api/projects/${projectId}`).then(res => {
      this.setState({ project: res.data });
    });
  };

  projectDelete = () => {
    const projectId = this.props.match.params.projectId;
    axios
      .delete(`/api/projects/${projectId}`)
      .then(() => this.props.history.goBack());
  };

  toggleUpForm = () => {
    this.setState({ upFormVisible: !this.state.upFormVisible });
  };

  render() {
    return (
      <ThisProDiv>
        <CardDiv className="card">
          <div className="card-image">
            <figure class="image is-4by3">
              <Img src={this.state.project.proImg} alt="Project Image" />
            </figure>{" "}
          </div>

          <div class="media-content">
            <p class="title is-4">Project Name: {this.state.project.name}</p>
          </div>
          <Par>
            <h3>SubContractors: </h3>
            <ul>
              {this.state.project.subcon.map((sub, i) => (
                <li key={i}> {sub.name} </li>
              ))}
            </ul>
          </Par>
        </CardDiv>
        <ButtDiv>
          <Button
            className="button is-link is-medium"
            onClick={this.toggleUpForm}
          >
            Update
          </Button>

          <Link to={`/projects/${this.state.project._id}/subs`}>
            <Button className="button is-link is-medium">Edit Subs</Button>
          </Link>

          <Button
            className="button is-link is-medium"
            onClick={this.projectDelete}
          >
            Delete
          </Button>
        </ButtDiv>
        <div>
          {this.state.upFormVisible ? (
            <EditProject
              getThisProject={this.getThisProject}
              toggleUpForm={this.toggleUpForm}
              projectId={this.state.project._id}
              projName={this.state.project.name}
              projImg={this.state.project.proImg}
              projSubcon={this.state.project.proSubcon}
            />
          ) : null}
        </div>
      </ThisProDiv>
    );
  }
}

export default ThisProject;

const ThisProDiv = styled.div`
  font-family: "Noto Serif", serif;
  height: 100vh;
  margin: 10vh auto;
  display: inline-block;
  width: 40vw;
`;

const ButtDiv = styled.div`
  margin: 3% 0;
  display: flex;
  justify-content: space-around;
`;

const Img = styled.img`
  display: flex;
  width: 35vw;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 4px solid lightgrey;
`;

const Par = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-wrap: normal;
  text-align: left;
`;

const CardDiv = styled.div`
  background-color: #a0b1b5;
  border: 4px solid lightgrey;
  border-radius: 10px;
  color: #2f3436;
`;

const Button = styled.button`
  background-color: #4b7782;
  font-family: "Noto Serif", serif;
`;
