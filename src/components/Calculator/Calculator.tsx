import { useState } from "react";
import { ButtonComponent, ImageButtonComponent } from "../Button/Button";
import {
  CalculatorButtons,
  CalculatorStyled,
  FinalResult,
  Interface,
  Result,
} from "./CalculatorStyled";
import { CalculatorHeader } from "./CalculatorHeader";

export function Calculator() {
  const [result, setResult] = useState('');
  const [finalResult, setFinalResult] = useState('');

  function handleClick(e) {
    setResult(result.concat(e.target.value));
  }

  function handleBackspace() {
    if (result.endsWith("**2") || result.endsWith("mod")) {
      setResult(result.slice(0, -3));
    }
    if (result.endsWith("**(1/2)")) {
      setResult(result.slice(0, -7));
    } else {
      setResult(result.slice(0, -1));
    }
  }

  function handleMultiply() {
    setResult(result.concat("*"));
  }

  function handleDivide() {
    setResult(result.concat("/"));
  }

  function handleSum() {
    setResult(result.concat("+"));
  }

  function handleSubtract() {
    setResult(result.concat("-"));
  }

  function handleComma(){
    setResult(result.concat("."))
  }
  function handleResult() {
    setFinalResult(eval(result));
    console.log( result, '=' ,eval(result))
  }

  function handleSquare() {
    setResult(result.concat("**2"));
  }

  function handleSquareRoot() {
    setResult(result.concat("**(1/2)"));
  }

  function handleMod() {
    setResult(result.concat("%"));
  }

  function handlePi() {
    setResult(result.concat("*3.14"));
  }

  function formatResult(result: string) {
    return result
      .toString()
      .replace("**(1/2)", "√ ")
      .replace("**2", "²")
      .replace("*3.14", "π ")
      .replace("*", " x ")
      .replace("/", " ÷ ")
      .replace("%", " mod ")
      .replace("+", " + ")
      .replace("-", " - ")
      .replace(".", ",");
  }

  return (
    <CalculatorStyled>
      <CalculatorHeader />
      <Interface>
        <FinalResult>{formatResult(finalResult)}</FinalResult>
        <Result>{formatResult(result)}</Result>
      </Interface>
      <CalculatorButtons>
        <ImageButtonComponent
          click={handleBackspace}
          type="backspace"
          color="brown"
        />
        <ButtonComponent click={handleClick} value="(" />
        <ButtonComponent click={handleClick} value=")" />
        <ButtonComponent click={handleMod} value="mod" />
        <ButtonComponent click={handlePi} value="π" />
        <ButtonComponent click={handleClick} value={7} />
        <ButtonComponent click={handleClick} value={8} />
        <ButtonComponent click={handleClick} value={9} />
        <ButtonComponent click={handleDivide} value="/" />
        <ImageButtonComponent click={handleSquareRoot} type="raiz" />
        <ButtonComponent click={handleClick} value={4} />
        <ButtonComponent click={handleClick} value={5} />
        <ButtonComponent click={handleClick} value={6} />
        <ButtonComponent click={handleMultiply} value="x" />
        <ButtonComponent click={handleSquare} value="x²" />
        <ButtonComponent click={handleClick} value={1} />
        <ButtonComponent click={handleClick} value={2} />
        <ButtonComponent click={handleClick} value={3} />
        <ButtonComponent click={handleSubtract} value="-" />
        <ButtonComponent
          click={handleResult}
          value="="
          color="green"
          id="double"
        />
        <ButtonComponent click={handleClick} value="0" />
        <ButtonComponent click={handleComma} value="," />
        <ButtonComponent click={handleClick} value="%" />
        <ButtonComponent click={handleSum} value="+" />
      </CalculatorButtons>
    </CalculatorStyled>
  );
}
