import React, { Component } from "react";
import question from '../dashboard/question.png'

export default class Avini extends Component {
  
  render() {
    return (
      <div>
      <h1>Fact or Cap?</h1>
      <br></br>
      <img src={question} height='300'></img>
      </div>
    );
  }
}