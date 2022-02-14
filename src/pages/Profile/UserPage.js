import { useState, useEffect } from "react";

import Header from "../Header";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import {
  OrdersContainer,
  OrderNumber,
  OrderDetails,
  Order,
  Title,
} from "./Style";

export default function UserPage() {
  const { auth } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const currentOrders = await api.getOrders(auth.token);

      setOrders(currentOrders.data.slice().reverse());
    } catch (error) {
      console.log(error);
    }
  }

  console.log(orders);
  return (
    <>
      <Header />
      <OrdersContainer>
        <Title>CONFIRA SEUS ÚLTIMOS PEDIDOS</Title>
        {orders.map((order, i) => (
          <>
            <Order key={i}>
              <OrderNumber>
                <span>Código do Pedido:</span>
                <span>{order.orderNumber}</span>
              </OrderNumber>
              <OrderDetails>
                <span>
                  Quantidade de Itens Pedidos:
                  {order.orderItens[0].length}
                </span>
                <span>
                  Preço final do pedido: R$
                  {order.orderPrice.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                <span>Status de Entrega: Em produção!</span>
              </OrderDetails>
            </Order>
          </>
        ))}
      </OrdersContainer>
    </>
  );
}
