import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import {
  Container,
  Footer,
  StyleLink,
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
import Header from "../Header";

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

  async function confirmPurchase() {
    if (body[0].length === 0) {
      return Swal.fire(
        "Seu Carrinho está Vazio!",
        `Você não pode enviar um pedido se não pedir nada!`,
        "error"
      );
    }
    try {
      const orderData = await api.sendOrder(body, total, auth.token);

      Swal.fire({
        title: `Pedido enviado!`,
        text: `O número do seu pedido é:
         ${orderData.data} `,
        imageUrl: `${Logo}`,

        color: "#73d28f",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header />
      <Mid>
        <CartContainer>
          <h1>Seu carrinho contém:</h1>
          <ListBuy>
            {arrCart.map((i) => (
              <Product key={i._id}>
                <ProductImg src={i.imageURL} />
                <Description>
                  <p>{i.name}</p>
                  <p>
                    R$
                    {i.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
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
            <span>
              Total: R${" "}
              {total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span>Forma de Pagamento: Alma</span>
          </PaymentConfirmation>
        </ConfirmationContainer>
      </Mid>

      <Footer>
        <StyleLink>
          <button onClick={() => confirmPurchase()}>
            <h1>Confirmar Compra</h1>
          </button>
        </StyleLink>
      </Footer>
    </Container>
  );
}
