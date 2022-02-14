import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

import { Top, Icons, Img } from "../Home/homeStyle";

export default function Header() {
  const { auth } = useAuth();
  const [total, setTotal] = useState(0.0);
  const [welcomeMessage, setMessage] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [productsCont, setCont] = useState([]);

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
  useEffect(() => {
    if (auth === null) {
      setMessage("Olá! Faça seu login antes de finalizar sua compra!");
    } else {
      setMessage(`Olá, ${auth.name}!`);
    }
  }, []);
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
  useEffect(() => {
    if (auth !== null) {
      setMessage(`Olá, ${auth.name}!`);
    }
  }, []);

  return (
    <Top>
      <Link to={"/"}>
        <Img src={Logo} />
      </Link>
      <Icons>
        <span>{welcomeMessage}</span>
        <ion-icon
          name="person-outline"
          onClick={() => ({ auth } === null ? GoToLogin() : GoToUserPage())}
        ></ion-icon>
        <ion-icon name="cart-outline" onClick={() => GoToCart()}></ion-icon>
      </Icons>
    </Top>
  );
}
