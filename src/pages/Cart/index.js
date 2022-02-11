import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../assets/Logo.png";
import {
    Container,
    Top,
    Footer,
    StyleLink,
    Saldo,
    Icons,
    Img,
    Mid,
} from "../../components/CartComponents"
export default function Cart() {
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)


    function GoToLogin() {
        navigate("/login");
      }
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
    )
}