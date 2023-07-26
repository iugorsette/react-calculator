import { HeaderButton, ButtonComponent } from "../Button/Button";
import { StyledCalculatorHeader, TopButtons } from "./CalculatorStyled";

export function CalculatorHeader() {
  return (
    <StyledCalculatorHeader>
      <ButtonComponent
        value="Desfazer"
        click={() => console.log("funcionou")}
      ></ButtonComponent>
      <TopButtons>
        {" "}
        <HeaderButton
          type="-"
          click={() => console.log("funcionou")}
        ></HeaderButton>
        <HeaderButton
          type="Square"
          click={() => console.log("funcionou")}
        ></HeaderButton>
        <HeaderButton
          type="x"
          click={() => console.log("funcionou")}
        ></HeaderButton>
      </TopButtons>
    </StyledCalculatorHeader>
  );
}
