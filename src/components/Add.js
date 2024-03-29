import React, { Component } from "react";

export class Addtodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default Addtodo;
