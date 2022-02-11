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
  CartContainer,
  ConfirmationContainer,
  UserConfirmation,
  AddressConfirmation,
  PaymentConfirmation,
} from "../../components/CartComponents";
export default function Cart() {
  const navigate = useNavigate();
  const [body, setBody] = useState([]);
  const [total, setTotal] = useState("");
  const [user, setUser] = useState({});
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      console.log("chamei o carrinho");
      const response = await api.getCart(auth.token);

      setBody(response.data.cart);
      setTotal(response.data.total);
      setUser({ name: response.data.name, address: response.data.address });
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

  const arr = { ...body };
  const arrCart = arr[0];

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
        <CartContainer>
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
        </CartContainer>
        <ConfirmationContainer>
          <UserConfirmation>
            <h1>Confime Seus Dados</h1>
            <p>Nome para entrega: {user.name}</p>
            <p> Endereço para entrega: {user.address}</p>

            <AddressConfirmation>
              <p>Deseja que a entrega seja em um endereço diferente?</p>
              <span>Lamento</span>
            </AddressConfirmation>
          </UserConfirmation>
          <PaymentConfirmation>
            <span>Total: R$ {total}</span>
            <span>Forma de Pagamento: Alma</span>
          </PaymentConfirmation>
        </ConfirmationContainer>
      </Mid>

      <Footer>
        <StyleLink to={"/carrinho"}>
          <button>
            <h1>Confirmar Compra</h1>
          </button>
        </StyleLink>
      </Footer>
    </Container>
  );
}
