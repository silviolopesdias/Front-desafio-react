import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  gap: 30px;
  height: 100%;
  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 20px;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Order = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  width: 342px;
  height: 101px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding-left: 30px;
  margin-bottom: 42px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  color: #c1c1c1;
  border: none;



  button {
    width: 24px;
    height: 28px;
    background: none;
    border: none;
    margin-left: 250px;
    cursor: pointer;
  }

  p {
    padding-top: 5px;
  }
`; 
