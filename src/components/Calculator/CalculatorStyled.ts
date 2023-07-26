import styled from "styled-components";
import { zinc } from "../../Colors/color";

export const StyledCalculatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  border-radius: 5px 5px 0 0;
  background-color: ${zinc[700]};
  border-bottom: solid 1px ${zinc[900]};
`;

export const Interface = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
`;

export const FinalResult = styled.h1`
  margin: 0;
  padding: 5px;
  color: ${zinc[50]};
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  min-height: 46px;
  border-bottom: solid 1px ${zinc[900]};
`;

export const Result = styled.h2`
  height: 25px;
  margin: 0;
  padding: 5px;
  color: ${zinc[50]};
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: solid 1px ${zinc[900]};
  text-align: right;
`;

export const CalculatorStyled = styled.div`
  background-color: ${zinc[800]};
  border-radius: 15px;
  padding: 0 0 10px 0;
  border: 1px solid ${zinc[900]};
`;

export const CalculatorDisplayStyled = styled.div`
  background-color: ${zinc[900]};
  border: solid 1px ${zinc[900]};
  border-radius: 5px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-align: right;
  width: 100%;
`;

export const CalculatorButtons = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 0.5rem;
  padding: 0 1rem;

  .double {
    grid-row: span 2;
    height: 100%;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
