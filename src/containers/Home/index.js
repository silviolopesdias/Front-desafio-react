import React, { useState, useRef } from "react";
import Burguer from "../../assets/Burguer1.svg";
import { useHistory } from "react-router-dom";

import axios from "axios";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import {
  Container,
  ContainerItens,
  Image,
  InputLabel,
  Input,
 
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const InputOrder = useRef();
  const InputName = useRef();
  const history = useHistory();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: InputOrder.current.value,
        name: InputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);

    history.push("Orders");
  }

  return (
    <Container>
      <Image alt="imagem-logo" src={Burguer} />

      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={InputOrder} placeholder="Pedido"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={InputName} placeholder="Nome do Cliente"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
