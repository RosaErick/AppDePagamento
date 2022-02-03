import react from "react";
import { getUser } from "./getUser";
import { useState, useEffect } from "react";
import { Component } from "react/cjs/react.production.min";

const API_URL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    this.fetchUserList();
  }

  async fetchUserList() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      this.setState({ users: data });

      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  createList() {
    return this.state.users.map((item) => {
      return (
        <>
          <h1>{item.name}</h1>
        </>
      );
    });
  }

  render() {
    return <li>{this.createList()}</li>;
  }
}

export default UserList;
