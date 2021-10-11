import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  gap: 30px;
  height:100%;
  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 20px;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #eeeeee;
  padding-left: 30px;
`;
export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding-left: 30px;
  margin-bottom: 42px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  border: none;
`;

