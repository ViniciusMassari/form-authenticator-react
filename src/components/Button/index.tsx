import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick , ...props}: IButtonProps) => {
  return <ButtonContainer {...props} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
