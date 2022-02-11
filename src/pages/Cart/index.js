import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import {
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
} from "../../components/CartComponents";
export default function Cart() {
  console.log("chegou carrinho");
  const navigate = useNavigate();
  const [body, setBody] = useState([]);
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const data = await api.getCart(auth.token);
      setBody(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  function GoToLogin() {
    navigate("/login");
  }

  const arr = { ...body.data };
  const arrCart = arr[0];
  console.log(arrCart);

  return (
    <Container>
      <Top>
        <Img src={Logo} />
        <Icons>
          <ion-icon
            name="person-outline"
            onClick={() => GoToLogin()}
          ></ion-icon>
          <ion-icon name="cart-outline"></ion-icon>
        </Icons>
      </Top>
      <Mid>
        <h1>Seu carrinho contém:</h1>
        <ListBuy>
          {arrCart.map((i) => (
            <Product key={i._id}>
              <ProductImg src={i.imageURL} />
              <Description>
                <p>{i.name}</p>
                <p>R${i.price}</p>
                <p>Quantidade: {0}</p>
              </Description>
            </Product>
          ))}
        </ListBuy>
      </Mid>

      <Footer>
        <StyleLink to={"/carrinho"}>
          <button>
            <h1>Confirmar Compra</h1>
          </button>
        </StyleLink>
        <Saldo>
          <h2>Total: </h2>
        </Saldo>
      </Footer>
    </Container>
  );
}
