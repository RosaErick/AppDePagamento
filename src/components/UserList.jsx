import react from "react";
import { getUser } from "./getUser";
import { useState, useEffect } from "react";
import { Component } from "react";
import styled from "styled-components";

const UserBox = styled.ul`
  padding: 0;
  margin: 0 0 2px 0;

  li {
    display: flex;
    background-color: #393a5e;
    background: linear-gradient(180deg, #393a5e 0%, #282a3f 100%);
    color: #fff;
    justify-content: space-around;
    align-items: center;
  }
  img {
    padding: 20px;
    border-radius: 150px;
  }

  .userData {
    flex: 1;
  }

  .username {
    margin: 0;
  }

  button {
    margin: 20px;
  }
`;

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
          <UserBox>
            <li>
              <img className="userImg" src={item.img} alt="" />
              <div className="userData">
                <p className="username">{item.name}</p>
                <p className="username">
                  ID: {item.id} - Username: {item.username}
                </p>
              </div>

              <div className="paybutton">
                <button onCLick>Pagar</button>
              </div>
            </li>
          </UserBox>
        </>
      );
    });
  }

  render() {
    return <>{this.drawList()}</>;
  }
}

export default UserList;
