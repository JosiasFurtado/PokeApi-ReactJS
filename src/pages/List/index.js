import React, { Component } from 'react';
import { FaSpinner, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import api from '../../services/api';

import PokeCard from '../../Components/PokeCard';

import { Container, Spinner, Page, PageNumber } from './styles';

export default class List extends Component {
  state = {
    pokemons: [],
    loading: false,
  };

  async componentDidMount() {
    const response = await api.get();
    this.setState({ pokemons: response.data.results });
  }

  render() {
    const { pokemons, loading } = this.state;
    return (
      <div>
        {pokemons ? (
          <Container>
            {pokemons.map(poke => (
              <PokeCard key={poke.name} name={poke.name} url={poke.url} />
            ))}
          </Container>
        ) : (
          <Spinner loading={loading}>
            <FaSpinner color="#fff" size={30} />
          </Spinner>
        )}
        <Page>
          <FaArrowLeft color="#fff" size={20} />
          <PageNumber value="01" disabled />
          <FaArrowRight color="#fff" size={20} />
        </Page>
      </div>
    );
  }
}
