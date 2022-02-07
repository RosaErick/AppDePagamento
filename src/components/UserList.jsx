import { Component } from "react";
import styled from "styled-components";

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
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  z-index: 99;
`;

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
    } catch (error) {
      console.log(error);
    }
  }

  formatValue = (e) => {
    const letterPattern = /[^0-9]/;
    if (letterPattern.test(e.key)) {
      //console.log(e.key)
      e.preventDefault();
      return;
    }
    if (!e.currentTarget.value) return;

    let newValue = e.currentTarget.value.toString();
    newValue = newValue.replace(/[\D]+/g, "");
    newValue = newValue.replace(/([0-9]{1})$/g, ",$1");

    if (newValue.length >= 6) {
      while (/([0-9]{4})[,|.]/g.test(newValue)) {
        newValue = newValue.replace(/([0-9]{1})$/g, ",$1");
        newValue = newValue.replace(/([0-9]{3})[,|.]/g, ".$1");
      }
    }
    e.currentTarget.value = newValue;
  };

  sendForm = (e) => {
    e.preventDefault();
    const payValue = document.getElementById("value").value;
    const card = document.getElementById("card").value;
    console.log(card, payValue);

    if (card == "card0") {
      fetch(API_URL_TRANSACTION, {
        method: "POST",
        body: JSON.stringify({
          card_number: "1111111111111111",
          cvv: 789,
          expiry_date: "01/18",
          destination_user_id: this.state.selectedUser,
          value: payValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json.status);

          if (json.status) {
            document.getElementsByClassName(
              "modal-payresult"
            )[0].innerHTML = `<h1>O Pagamento para ${this.state.selectedUser} foi concluido com Sucesso.</h1>`;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (card == "card1") {
      document.getElementsByClassName(
        "modal-payresult"
      )[0].innerHTML = `<h1>O Pagamento para ${this.state.selectedUser} não foi concluido com Sucesso.</h1>`;
    }
  };

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
          <form className="modalForm">
            <input
              name="value"
              type="text"
              id="value"
              placeholder="R$ 0,00"
              onKeyPress={(e) => {
                this.formatValue(e);

                //this.setState({ show: false });
              }}
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
              type="submit"
              className="modalButton"
              onClick={(e) => {
                e.preventDefault();

                this.sendForm(e);

                //this.setState({ show: false });
              }}
            >
              PAGAR
            </button>
          </form>

          <div className="PaymentResumeBox">
            <div className="modalTitle">
              <p>Recibo de pagamento</p>
            </div>
            <div className="modal-payresult">
              <button>Concluir Transação</button>
            </div>
          </div>
        </Modal>
      );
    }
  };

  render() {
    return (
      <>
        {this.drawModal()}
        {this.drawList()}
      </>
    );
  }
}

export default UserList;
