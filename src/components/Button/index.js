import React from 'react';

import { ButtonContainer } from './styles';

function Button({ onClick, children = 'Buscar', disabled = false }) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
