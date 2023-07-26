import { Backspace, Minus, Radical, Square, X } from "@phosphor-icons/react";
import { ButtonStyled, HeaderButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  type?: string;
  value?: string | number;
  color?: string;
  click: (e?: any) => void;
  id?: string;
}

export function ButtonComponent({ click, color, value, id }: ButtonProps) {
  return (
    <ButtonStyled onClick={click} color={color} value={value} className={id}>
      {value}
    </ButtonStyled>
  );
}
export function ImageButtonComponent({
  type,
  color,
  click,
}: ButtonProps): JSX.Element {
  return (
    <ButtonStyled color={color} onClick={click}>
      {type === "backspace" ? (
        <Backspace size={18} />
      ) : type === "raiz" ? (
        <Radical size={18} />
      ) : (
        type
      )}
    </ButtonStyled>
  );
}

export function HeaderButton({ type, color, click }: ButtonProps) {
  const size = 12;
  return (
    <div>
      <HeaderButtonStyled color={color} onClick={click}>
        {type === "x" ? (
          <X size={size} />
        ) : type === "-" ? (
          <Minus size={size} />
        ) : type === "Square" ? (
          <Square size={size} />
        ) : (
          type
        )}
      </HeaderButtonStyled>
    </div>
  );
}
