import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%
  height:100%
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
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Product = styled.div`
  width: 400px;
  gap: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 0 0 0.7em gray;
  border-radius: 10px;
  margin-right: 45px;
  margin-bottom: 15px;
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

const StyleLink = styled(Link)`
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
  margin-top: 100px;
  width: 100%;
  height: 70vh;
  

  h1{

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
    Description

}