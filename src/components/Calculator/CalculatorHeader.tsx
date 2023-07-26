import { HeaderButton, ButtonComponent } from "../Button/Button";
import { StyledCalculatorHeader, TopButtons } from "./CalculatorStyled";

export function CalculatorHeader({click}: {click: () => void}) {
  return (
    <StyledCalculatorHeader>
      <ButtonComponent
        value="Limpar"
        click={click}
      ></ButtonComponent>
      <TopButtons>
        {" "}
        <HeaderButton
          type="-"
          click={() => console.log("minimizar")}
        ></HeaderButton>
        <HeaderButton
          type="Square"
          click={() => console.log("maximizar")}
        ></HeaderButton>
        <HeaderButton
          type="x"
          click={() => console.log("fechar")}
        ></HeaderButton>
      </TopButtons>
    </StyledCalculatorHeader>
  );
}
