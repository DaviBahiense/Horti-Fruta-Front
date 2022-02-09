import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../assets/Logo.png";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("0,00");

  useEffect(() => {
    renderProducts();
  }, []);

  function renderProducts() {
    const promise = axios.get("http://localhost:5000/products");

    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((e) => {
      console.log(e.response);
    });
  }

  function Calculate() {
    console.log("bananinha");
  }

  return (
    <>
      <Container>
        <Top>
          <Img src={Logo} />
        </Top>
        <List>
          <ListBuy>
            {products.map((h) => (
              <Product key={h.id} onClick={() => Calculate()}>
                <img scr={h.image} />
                <Description>
                  <p>{h.name}</p>
                  <p>{h.price}</p>
                </Description>
              </Product>
            ))}
          </ListBuy>
        </List>
        <Footer>
          <Saldo>
            <h2>{total}</h2>
          </Saldo>
          <StyleLink to={"/carrinho"}>
            <button>
              <h1>Finalizar Compra</h1>
            </button>
          </StyleLink>
        </Footer>
      </Container>
    </>
  );
}

const Container = styled.div``;

const Top = styled.div``;

const Img = styled.img``;

const List = styled.div``;

const ListBuy = styled.div``;

const Product = styled.div``;

const Description = styled.div``;

const Footer = styled.footer``;

const Saldo = styled.div``;

const StyleLink = styled(Link)``;
