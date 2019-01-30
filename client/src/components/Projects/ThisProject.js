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
            SubContractors:
            <ul>
              {this.state.project.subcon.map((sub, i) => (
                <li key={i}> {sub.name} </li>
              ))}
            </ul>
          </Par>
        </CardDiv>
        <ButtDiv>
          <button
            className="button is-link is-medium"
            onClick={this.toggleUpForm}
          >
            Update
          </button>

          <Link to={`/projects/${this.state.project._id}/subs`}>
            <button className="button is-link is-medium">Edit Subs</button>
          </Link>

          <button
            className="button is-link is-medium"
            onClick={this.projectDelete}
          >
            Delete
          </button>
        </ButtDiv>
        <div>
          {this.state.upFormVisible ? (
            <EditProject
              getThisProject={this.getThisProject}
              toggleUpForm={this.toggleUpForm}
              projectId={this.state.project._id}
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
`;

const CardDiv = styled.div`
  background-color: #a0b1b5;
  border: 4px solid lightgrey;
  border-radius: 10px;
  color: #2f3436;
`;
