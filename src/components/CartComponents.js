import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  border: 2px solid #de4e4e;
  border-radius: 5px;
  background-color: white;
  position: relative;
  overflow: hidden;
  margin-left: 100px;
  margin-top: 20px;

  h1 {
    margin-left: 25px;
  }
`;

const ConfirmationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  min-width: 25%;
  gap: 20px;
  margin-right: 90px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #73d28f;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9999;
  box-shadow: rgb(112 112 112 / 16%) 0px 5px 10px;

  ion-icon {
    font-size: 40px;
    margin-right: 20px;
    color: #de4e4e;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 5px;
`;

const ListBuy = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-y: auto;
  margin-left: 15px;
  position: absolute;
  top: 70px;
  left: 60px;
`;

const Product = styled.div`
  width: 600px;
  gap: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0 0 0.7em gray;
  border-radius: 10px;
  margin-right: 45px;
  margin-bottom: 15px;
  margin-top: 10px;
  margin-left: 10px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const UserConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #de4e4e;
  border-radius: 5px;

  h1 {
    margin-left: 10px;
  }
  p {
    margin-left: 20px;
  }
  span {
    margin-left: 20px;
  }
`;
const PaymentConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #de4e4e;
  border-radius: 5px;
  span {
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
  }
`;

const AddressConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const Footer = styled.footer`
  height: 100px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-top: 5px;
  background: white;
  align-items: center;
  border-top: 1px solid #73d28f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Saldo = styled.div`
  display: flex;
  align-items: center;

  margin-right: 25px;

  font-size: 18px;
  position: fixed;
  right: 25px;
`;

const StyleLink = styled.div`
  text-decoration: none;
  button {
    width: 300px;
    border: none;
    background: #de4e4e;
    border-radius: 10px;
    color: white;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 1em gray;
    margin-left: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 30px;
`;

const ProductImg = styled.img`
  margin-top: 10px;
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;
const Mid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
  height: 70vh;
  gap: 20px;
  h1 {
  }
`;

const TopCart = styled.div`
  background-color: #de4e4e;
  height: 65px;

  h1 {
    color: white;
  }
`;

const TopUser = styled.div`
  background-color: #de4e4e;
  height: 60px;

  h1 {
    color: white;
  }
`;

export {
  Container,
  Top,
  Footer,
  StyleLink,
  Saldo,
  Icons,
  Img,
  Mid,
  ListBuy,
  Product,
  ProductImg,
  Description,
  CartContainer,
  ConfirmationContainer,
  UserConfirmation,
  PaymentConfirmation,
  AddressConfirmation,
  TopCart,
  TopUser,
};
