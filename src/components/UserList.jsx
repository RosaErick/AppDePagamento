import react from "react";
import { getUser } from "./getUser";
import { useState, useEffect } from "react";
import { Component } from "react";

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

  drawList() {
    return this.state.users.map((item) => {
      return (
        <>
          <ul>
            <li>
              <img className="userImg" src={item.img} alt="" />
              <div className="userData">
                <p className="username">{item.name}</p>
                <p className="userid">ID: {item.id}</p>
                <p className="username">Username: {item.username}</p>
              </div>

              <div className="paybutton">
                <button onCLick>Pagar</button>
              </div>
            </li>
          </ul>
        </>
      );
    });
  }

  render() {
    return <>{this.drawList()}</>;
  }
}

export default UserList;
