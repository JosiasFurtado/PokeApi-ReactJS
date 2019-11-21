import React from 'react';

import Search from '../Search';
import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="pokeball" />
      <a href="/">PokeAPI</a>
      <Search />
    </Container>
  );
}
