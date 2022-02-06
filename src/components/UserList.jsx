import { Component } from "react";
import styled from "styled-components";
import "../App.css";

const UserBox = styled.ul`
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
`;
const Modal = styled.div`
width:50%;
position:absolute;
top:0;



`

//lista dos cartões
let cards = [
  // cartão válido
  {
    card_number: "1111111111111111",
    cvv: 789,
    expiry_date: "01/18",
  },
  // cartão inválido
  {
    card_number: "4111111111111234",
    cvv: 123,
    expiry_date: "01/20",
  },
];

const API_URL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";
const API_URL_TRANSACTION = `https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`;

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: "",
      display: "none",
      show: false,
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

  drawList = () => {
    return this.state.users.map((item) => {
      return (
        <>
          <UserBox>
            <li key={item.id}>
              <img className="userImg" src={item.img} alt="" />
              <div className="userData">
                <p className="username">{item.name}</p>
                <p className="username">
                  ID: {item.id} - Username: {item.username}
                </p>
              </div>

              <div className="paybutton">
                <button
                  onClick={(e) => {
                    this.setState({ selectedUser: item.name });
                    this.setState({ show: true });

                    console.log(this.state);
                  }}
                >
                  Pagar
                </button>
              </div>
            </li>
          </UserBox>
        </>
      );
    });
  };

  drawModal = () => {
    if (this.state.show == true) {
      return (
        <Modal>
          <div className="modalTitle">
            <p>
              Pagamento para <span>{this.state.selectedUser}</span>
            </p>
          </div>
          <form action="" className="modalForm">
            <input
              name="value"
              type="number"
              id="value"
              placeholder="R$ 0,00"
              required
            ></input>
            <select name="card" id="card" required>
              <option value="">Selecione o cartão</option>
              {cards.map((card, index) => (
                <option value={"card" + index} key={"card" + index}>
                  Cartão com final {card.card_number.substr(-4)}
                </option>
              ))}
            </select>
            <button
              className="modalButton"
              onClick={(e) => {
                this.setState({ show: false });
                console.log(this.state);
              }}
            >
              PAGAR
            </button>
          </form>
        </Modal>
      );
    }
  };

  render() {
    return (
      <>
        {this.drawList()}
        {this.drawModal()}
      </>
    );
  }
}

export default UserList;
