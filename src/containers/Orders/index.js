import React, { useState, useEffect } from "react";
import Burguer2 from "../../assets/Burguer2.svg";
import { useHistory } from "react-router-dom";
import Trash from "../../assets/Trash.svg";
import axios from "axios";

import { H1 } from "../../components/Title/styles";
import { Button } from "../../components/Button/styles";

import { Container, ContainerItens, Image, Order } from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="imagem-logo" src={Burguer2} />

      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <p> {order.order} </p>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
              <p> {order.name} </p>
            </Order>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;
