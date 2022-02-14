import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  span {
    font-size: 20px;
    margin-right: 20px;
    color: #de4e4e;
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 5px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ListBuy = styled.div`
  margin-top: 60px;
  margin-bottom: 150px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Product = styled.div`
  width: 200px;
  gap: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 0.7em gray;
  border-radius: 10px;
  margin-right: 45px;
  margin-bottom: 35px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 10px;
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

const Adve = styled.div`
  margin-top: 100px;
  width: 95%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 15px;
`;

const Icons = styled.div`
  display: flex;
  gap: 30px;
`;

const ProductImg = styled.img`
  margin-top: 10px;
  width: 150px;
  height: 190px;
  border-radius: 10px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #de4e4e;
  width: 80px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;

  button {
    border: none;
    height: 30px;
    width: 20px;
    border-radius: 10px;
    font-size: 20px;
    text-decoration: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #de4e4e;
  }

  p {
    width: 30px;
    border-top: 1px solid #de4e4e;
    border-bottom: 1px solid #de4e4e;
    background-color: white;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export {
  Container,
  Top,
  Img,
  Icons,
  List,
  Adve,
  Image,
  ListBuy,
  Product,
  ProductImg,
  Description,
  Button,
  Footer,
  StyleLink,
  Saldo,
};
