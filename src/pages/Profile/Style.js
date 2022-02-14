import styled from "styled-components";

const Order = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;
const OrdersContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 150px;
  flex-direction: column;
  justify-content: center;
`;

const OrderNumber = styled.span`
  margin-bottom: 5px;
  margin-right: 10px;
  max-width: 70%;
  background-color: #de4e4e;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  span {
    font-size: 17px;
    line-height: 23px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  color: #de4e4e;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export { OrdersContainer, OrderNumber, OrderDetails, Order, Title };
