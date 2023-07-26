import styled from "styled-components";
import { zinc } from "../../Colors/color";

export const ButtonStyled = styled.button`
  background-color: ${(props) => (props.color ? props.color : zinc[700])};
  border: solid 1px ${zinc[900]};
  border-radius: 5px;
  color: ${zinc[50]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderButtonStyled = styled.button`
  background-color: ${(props) => (props.color ? props.color : zinc[700])};
  border: solid 1px transparent;
  border-radius: 100%;
  color: ${zinc[50]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  

  &:hover {
    background-color: ${zinc[800]};
  }
`;