import { useState, useEffect } from "react";

import Header from "../Header";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BASE_URL } from "../../services/api";
import { Container } from "../Home/homeStyle";
import { OrdersContainer } from "./Style";

export default function UserPage() {
  const { auth } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const currentOrders = await api.getOrders(auth.token);
      console.log(currentOrders);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header />
      <OrdersContainer></OrdersContainer>
    </Container>
  );
}
