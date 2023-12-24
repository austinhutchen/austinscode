import React from 'react';
import styled from 'styled-components';

interface HamburgerProps {
  isOpen: boolean;
}

export const HamburgerStyles = styled.div<HamburgerProps>`
  .burger1 {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
  .burger2 {
    transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }
  .burger3 {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;


