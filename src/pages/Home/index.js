import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import Carousel, { CarouselItem } from "./Carousel";
import ScrollButton from "../../components/ScrollButton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0.0);
  const navigate = useNavigate();

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
  function Calculate(value) {
    setTotal(total + value);
  }

  function GoToCart() {
    navigate("/carrinho");
  }

  function GoToLogin() {
    navigate("/login");
  }

  return (
    <>
      <Container>
        <Top>
          <Img src={Logo} />
          <Icons>
            <ion-icon
              name="person-outline"
              onClick={() => GoToLogin()}
            ></ion-icon>
            <ion-icon name="cart-outline" onClick={() => GoToCart()}></ion-icon>
          </Icons>
        </Top>
        <List>
          <Adve>
            <Carousel>
              <Image src="https://www.enicbcmed.eu/sites/default/files/styles/image_style_slider/public/2020-06/fruits.png?itok=IRrBclNj"></Image>
              <Image src="https://ciclovivo.com.br/wp-content/uploads/2012/12/iStock-612524020.jpg"></Image>
              <Image src="https://www.dinheirorural.com.br/wp-content/uploads/sites/18/2020/11/31-418x235.jpg"></Image>
            </Carousel>
          </Adve>
          <ListBuy>
            {products.map((h) => (
              <Product key={h.id} onClick={() => Calculate(h.price)}>
                <ProductImg src={h.imageURL} />
                <Description>
                  <p>{h.name}</p>
                  <p>R${h.price}</p>
                </Description>
              </Product>
            ))}
          </ListBuy>
        </List>
        <Footer>
          <StyleLink to={"/carrinho"}>
            <button>
              <h1>Finalizar Compra</h1>
            </button>
          </StyleLink>
          <Saldo>
            <h2>Total: {total}</h2>
          </Saldo>

          <ScrollButton />
        </Footer>
      </Container>
    </>
  );
}

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
