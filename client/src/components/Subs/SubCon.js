import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class SubCon extends Component {
  state = {
    subcon: [
      {
        name: "",
        trade: ""
      }
    ]
  };

  componentDidMount = () => {
    this.getAllSubs();
  };

  getAllSubs = () => {
    const projectId = this.props.match.params.projectId;
    console.log(projectId);
    axios
      .get(`/api/projects/${projectId}/subs`)
      .then(res => this.setState({ subcon: res.data }));
  };

  render() {
    return (
      <ConDiv>
        <SubHeader>Project Subcontractors</SubHeader>
        <Link to="/subs/edit">
          <button className="button is-link">Add Subcontractor</button>
        </Link>
        <SubDiv>
          {this.state.subcon.map((subs, i) => (
            <article class="message is-info" key={i}>
              <div class="message-header">
                Company Name: {subs.name}
                <button class="delete" />
              </div>
              <div class="message-body">
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
  color: white;
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
