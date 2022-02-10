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
  // const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("0,00");
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image:
        "https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600368/106cc3ecff.jpg",
      price: 1.99,
      name: "Alface",
    },
    {
      id: 2,
      image:
        "https://organicalife.com.br/wp-content/uploads/2020/06/alface-crespa_organicalife_v1.jpg",
      price: 1.99,
      name: "Alface Crespa",
    },
    {
      id: 3,
      image:
        "https://scfoods.fbitsstatic.net/img/p/tomate-debora-maduro-para-molho-500g-70892/257510.jpg?w=800&h=800&v=no-change&qs=ignore",
      price: 2.0,
      name: "Tomate",
    },
    {
      id: 4,
      image:
        "https://cdn.awsli.com.br/600x700/1578/1578261/produto/76998588/ba2809049e.jpg",
      price: 1.99,
      name: "Tomate Cereja",
    },
    {
      id: 5,
      image:
        "https://cdn.dooca.store/1452/products/tomate-italiano_640x640+fill_ffffff.jpg?v=1600899422&webp=0",
      price: 2.0,
      name: "Tomate Italiano",
    },
    {
      id: 6,
      image:
        "https://hiperideal.vteximg.com.br/arquivos/ids/170995-1000-1000/51055.jpg?v=636616549635870000",
      price: 2.0,
      name: "Cebola",
    },
    {
      id: 7,
      image:
        "https://fortatacadista.vteximg.com.br/arquivos/ids/161321-800-800/CEBOLA-ROXA-KG---631728.jpg?v=637437445828000000",
      price: 1.99,
      name: "Cebola Roxa",
    },
    {
      id: 8,
      image:
        "https://galeriarural.com.br/lenildo-hortifruti/wp-content/uploads/sites/19/2020/10/Repolho.png",
      price: 2.0,
      name: "Repolho",
    },
    {
      id: 9,
      image:
        "https://onisafra.com/manaus/wp-content/uploads/2020/05/repolho-roxo.jpg",
      price: 2.0,
      name: "Repolho Roxo",
    },
    {
      id: 10,
      image:
        "https://cdn.awsli.com.br/800x800/1304/1304561/produto/52600472/7d2fc90581.jpg",
      price: 1.99,
      name: "Pepino",
    },
    {
      id: 11,
      image:
        "https://www.hortifrutiorganico.com.br/121-large_default/banana-organica-prata-1-kg.jpg",
      price: 1.99,
      name: "Banana Prata",
    },
    {
      id: 12,
      image:
        "https://hiperideal.vteximg.com.br/arquivos/ids/167706-1000-1000/56383.jpg?v=636615816296530000",
      price: 2.0,
      name: "Maça",
    },
    {
      id: 13,
      image:
        "https://img-21.ccm2.net/042iHAewS5QhDxJuNauCwI_x864=/728x/aad4dd876b7546b8b4415552846789f4/ccm-faq/uti_123rf_31404789_Katerina_Kovaleva.jpg",
      price: 4.0,
      name: "Melancia",
    },
    {
      id: 14,
      image:
        "https://onisafra.com/manaus/wp-content/uploads/2020/03/manga-tommy-01.jpg",
      price: 2.0,
      name: "Manga",
    },
    {
      id: 15,
      image:
        "https://fortatacadista.vteximg.com.br/arquivos/ids/161326-800-800/KIWI-IMPORTADO-KG---631850.jpg?v=637437445847700000",
      price: 1.99,
      name: "Kiwi",
    },
    {
      id: 16,
      image:
        "https://cd.shoppub.com.br/cenourao/media/cache/7d/dc/7ddcf04db9666b50ce4a4d43c23177eb.png",
      price: 2.0,
      name: "Abacaxi",
    },
    {
      id: 17,
      image:
        "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg",
      price: 1.99,
      name: "Morango",
    },
    {
      id: 18,
      image:
        "https://s3-sa-east-1.amazonaws.com/rocky-2c5b937991b0cfc379dbf5f675740298/a4ea2a90999a42a7715dd3802ddfe9ef.jpg",
      price: 5.0,
      name: "Pitaya",
    },
    {
      id: 19,
      image:
        "http://static3.tcdn.com.br/img/img_prod/450860/muda_de_pera_d_agua_ou_europeia_1m_enxertada_676_1_20190611093602.jpg",
      price: 2.0,
      name: "Pera",
    },
    {
      id: 20,
      image:
        "https://www.embrapa.br/image/journal/article?img_id=32550707&t=1521029890096",
      price: 2.0,
      name: "Melão",
    },
    {
      id: 21,
      image:
        "https://galeriarural.com.br/lenildo-hortifruti/wp-content/uploads/sites/19/2020/10/Cenoura.png",
      price: 1.99,
      name: "Cenoura",
    },
    {
      id: 22,
      image:
        "https://arcomixstr.blob.core.windows.net/product/6043-pimentao-vermelh-kg-g.jpg",
      price: 3.0,
      name: "Pimentão Vermelho",
    },
    {
      id: 23,
      image:
        "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/beterraba[1]-1000x1000.jpg",
      price: 2.0,
      name: "Beterraba",
    },
    {
      id: 24,
      image: "https://static.clubeextra.com.br/img/uploads/1/865/637865.png",
      price: 3.0,
      name: "Abobora",
    },
    {
      id: 25,
      image:
        "https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/855x635/9df78eab33525d08d6e5fb8d27136e95/i/n/inhame-kg-0000000030106.jpg",
      price: 1.99,
      name: "Inhame",
    },
  ];

  useEffect(() => {
    renderProducts();
  }, []);

  function renderProducts() {
    console.log("banana");
    // const promise = axios.get("http://localhost:5000/products");

    // promise.then((res) => {
    //   setProducts(res.data);
    // });
    // promise.catch((e) => {
    //   console.log(e.response);
    // });
  }
  function Calculate() {
    console.log("bananinha");
  }

  function GoToCart() {
    navigate("/carrinho");
  }

  function GoToLogin() {
    navigate("/");
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
              <Product key={h.id} onClick={() => Calculate()}>
                <ProductImg scr={h.image} />
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
