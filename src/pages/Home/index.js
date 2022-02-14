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
import LoginContext from "../../context/LoginContext.js";
import ContContext from "../../context/CounterContext.js";
import { useContext } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { auth } = useAuth();
  const [total, setTotal] = useState(0.0);
  const navigate = useNavigate();
  const [productsCont, setCont] = useState([]);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const { counters, setCounters } = useContext(ContContext);

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
      if (data.id === cart[i].id) {
        toRemove = cart;
        toRemove.splice(i, 1);
        setCart(toRemove);
        return;
      }
    }
  }

  async function Finish() {
    const stringCart = JSON.stringify(cart);
    localStorage.removeItem("userCart");
    localStorage.setItem("userCart", stringCart);

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

  return (
    <>
      <Container>
        <Header></Header>
        <List>
          <Adve>
            <Carousel>
              <Image src="https://2.bp.blogspot.com/-27m65p6ogck/T3Z0i0MP3WI/AAAAAAAAAmk/yzGONV5yeHE/s1600/hortifruti-01.jpg"></Image>
              <Image src="https://institucional.hortifruti.com.br/wp-content/uploads/2014/05/campanha_holly_kiwi.jpg"></Image>
              <Image src="https://institucional.hortifruti.com.br/wp-content/uploads/2014/05/campanha_holly_chuchu.jpg"></Image>
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
