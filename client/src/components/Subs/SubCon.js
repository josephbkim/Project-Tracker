import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import SubAddForm from "./SubAddForm";

class SubCon extends Component {
  state = {
    subcon: [
      {
        name: "",
        trade: ""
      }
    ],
    addFormVisible: false
  };

  componentDidMount = () => {
    this.getAllSubs();
  };

  getAllSubs = () => {
    const projectId = this.props.match.params.projectId;
    axios
      .get(`/api/projects/${projectId}/subs`)
      .then(res => this.setState({ subcon: res.data }));
  };

  subDelete = (event, subsId) => {
    event.preventDefault();

    const projectId = this.props.match.params.projectId;

    axios.delete(`/api/projects/${projectId}/subs/${subsId}`).then(() => {
      this.getAllSubs();
    });
  };

  addFormToggle = () => {
    this.setState({ addFormVisible: !this.addFormVisible });
  };

  render() {
    return (
      <ConDiv>
        <SubHeader>Project Subcontractors</SubHeader>
        <button className="button is-link" onClick={this.addFormToggle}>
          Add Subcontractor
        </button>
        <div>
          {this.state.addFormVisible ? (
            <SubAddForm
              getAllSubs={this.getAllSubs}
              addFormToggle={this.addFormToggle}
              projectId={this.props.match.params.projectId}
            />
          ) : null}
        </div>
        <SubDiv>
          {this.state.subcon.map((subs, i) => (
            <article className="message is-info" key={i}>
              <div className="message-header">
                Company Name: {subs.name}
                <button
                  className="delete"
                  onClick={event => this.subDelete(event, subs._id)}
                />
              </div>
              <div className="message-body">
                <p>Trade: {subs.trade}</p>
              </div>
            </article>
          ))}
        </SubDiv>
      </ConDiv>
    );
  }
}

export default SubCon;

const SubHeader = styled.div`
  font-size: 5vh;
  color: #439fb5;
`;

const ConDiv = styled.div`
  font-family: "Noto Serif", serif;
  font-size: 3vh;
  height: 100vh;
  color: white;
`;

const SubDiv = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
`;
