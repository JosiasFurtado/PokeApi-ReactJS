import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="pokeball" />
      <a href="/">PokeAPI</a>
    </Container>
  );
}
