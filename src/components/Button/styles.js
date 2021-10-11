import styled from "styled-components";



export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: ${(props) =>(props.isBack ? "rgba(255, 255, 255, 0.14)" : "#d93856")};
  margin-top: 56px;
  margin-bottom: 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffff;
  border: none;
  cursor: pointer;
 

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }


`;