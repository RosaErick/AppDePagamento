import react from "react";
import UserList from "./UserList";
import { useState } from "react";
import { searchForWorkspaceRoot } from "vite";



function ModalComponent(props) {

  //lista dos cartões
    let cards = [
        // cartão válido
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        // cartão inválido
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
    ];



    const [modal, setModal] = useState('none');



    return (
        <>
         <div className="modal_title">
                    <p>Pagamento para <span>{this.props}</span></p>
                </div>
                <form action="" className="modal_form">
                    <input name="value" type="number" id="value" placeholder="R$ 0,00" required></input>
                    <select name="card" id="card" required>
                        <option value="">Selecione o cartão</option>
                        {cards.map((card, index) =>
                            <option value={'card'+index} key={'card'+index}>Cartão com final {card.card_number.substr(-4)}</option>
                        )}
                    </select>
                    <button className="modal_button" >PAGAR</button>
                </form>

    </>



)



}


export default ModalComponent