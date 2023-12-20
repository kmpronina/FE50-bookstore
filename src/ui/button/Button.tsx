import React, { PropsWithChildren } from 'react';
import { ButtonStyled } from './ButtonStyled';

interface Props extends PropsWithChildren {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  width?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, onClick, type, width } = props;

  return (
    <ButtonStyled type={type} onClick={onClick} $width={width}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
