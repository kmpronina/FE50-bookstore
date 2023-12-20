import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const InputErrorMessage: React.FC<Props> = (props) => {
  const { children } = props;

  return <InputErrorMessage>{children}</InputErrorMessage>;
};

export default InputErrorMessage;
