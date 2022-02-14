import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Carousel, { CarouselItem } from "./Carousel";
import ScrollButton from "../../components/ScrollButton";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BASE_URL } from "../../services/api";
import {
  Container,
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
} from "./homeStyle.js";
import Header from "../Header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { auth } = useAuth();
  const [total, setTotal] = useState(0.0);
  const navigate = useNavigate();
  const [productsCont, setCont] = useState([]);
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 0 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
    { id: 10, value: 0 },
  ]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    renderProducts();
  }, []);
  let toRemove = [];

  useEffect(() => {
    renderCounter();
  }, []);

  function renderCounter() {}

  function renderProducts() {
    const promise = axios.get(`${BASE_URL}/products`);
    promise.then((res) => {
      setProducts(res.data);
      setCont(products);
    });
    promise.catch((e) => {
      console.log(e.response);
    });
  }

  function Increase(data, index) {
    setTotal(total + data.price);
    setCart([...cart, data]);
    const countersIn = counters;
    countersIn[index].value++;
    setCounters(countersIn);
  }

  function Remove(data, index) {
    setTotal(total - data.price);
    const countersOut = counters;
    countersOut[index].value--;
    setCounters(countersOut);
    for (let i = 0; i < cart.length; i++) {
      if (data.id == cart[i].id) {
        toRemove = cart;
        toRemove.splice(i, 1);
        setCart(toRemove);
        return;
      }
    }
  }

  async function Finish() {
    if (!auth) {
      navigate("/login");
    }
    try {
      await api.mountCart(cart, total, auth.token);

      navigate("/carrinho");
    } catch (error) {
      console.log(error);
    }
  }

  function GoToCart() {
    let totalItems = cart.length;
    Swal.fire({
      title: "Seu Carrinho!",

      text:
        totalItems > 0
          ? `Você tem um total de ${totalItems} item(s) por R$ ${total.toLocaleString(
              "pt-BR",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )} no seu carrinho! Está pronto para finalizar sua compra?`
          : "Você nem selecionou nada!",
      showCancelButton: totalItems > 0 ? true : false,
      confirmButtonColor: "#73d28f",
      cancelButtonColor: "#DE4E4E",
      confirmButtonText:
        totalItems > 0 ? "Sim, quero confirmar!" : "Voltar e Selecionar",
      cancelButtonText: "Não, ainda estou pensando!",
    }).then((result) => {
      if (result.isConfirmed && totalItems > 0) {
        Finish();
      }
    });
  }

  function GoToLogin() {
    navigate("/login");
  }

  function GoToUserPage() {
    navigate("/perfil");
  }

  return (
    <>
      <Container>
        <Header></Header>
        <List>
          <Adve>
            <Carousel>
              <Image src="https://www.enicbcmed.eu/sites/default/files/styles/image_style_slider/public/2020-06/fruits.png?itok=IRrBclNj"></Image>
              <Image src="https://ciclovivo.com.br/wp-content/uploads/2012/12/iStock-612524020.jpg"></Image>
              <Image src="https://www.dinheirorural.com.br/wp-content/uploads/sites/18/2020/11/31-418x235.jpg"></Image>
            </Carousel>
          </Adve>
          <ListBuy>
            {products.map((h, i) => (
              <Product key={h.id}>
                <ProductImg src={h.imageURL} />
                <Description>
                  <p>{h.name}</p>
                  <p>
                    R$
                    {h.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </Description>
                <Button>
                  <button onClick={() => Increase(h, i)}>+</button>
                  <p>{counters[i].value}</p>
                  <button onClick={() => Remove(h, i)}>-</button>
                </Button>
              </Product>
            ))}
          </ListBuy>
        </List>
        <Footer>
          <StyleLink onClick={() => Finish()}>
            <button>
              <h1>Finalizar Compra</h1>
            </button>
          </StyleLink>
          <Saldo>
            <h2>
              Total:{" "}
              {parseFloat(total).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </h2>
          </Saldo>

          <ScrollButton />
        </Footer>
      </Container>
    </>
  );
}
