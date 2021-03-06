import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*{
margin:0;
padding:0;
box-size:border-box;


}

body{
  height:100%;
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', 'Roboto', 'Oxygen',
    'Segoe UI', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


  button {
    margin: 20px;
    cursor:pointer;
    padding:5px;
  }
    .userData {
    flex: 1;
  }
  
.modalTitle{
    background-color: #474a6e;
    color: white;
    font-size: 24px;
    height: 60px;
    width: 50%;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px 6px 0 0;
    
  .closeButton {
  position:absolute;
  top:0;
  right:0;
  padding:5px;
  font-size:15px;
  cursor:pointer;
  span{
      color:#ceceec;
    }
  }

    span{
      color:yellow;
    }
}


.modalForm, .modal-payresult{
  display:flex;
  flex-direction:column;
  align-items:center;
  width:50%;
  background-color:#fff;
  border-radius: 0 0 6px 6px;


  input, select, button {
    margin:10px 5px;
    padding:5px;
  cursor:pointer;
  }

}

.hide {
display:none;

}


.PaymentResumeBox{
 display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  
p {
padding:30px;
font-size:15px;

}

}

`;

export default GlobalStyle;
