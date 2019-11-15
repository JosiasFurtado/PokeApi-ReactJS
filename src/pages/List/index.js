import React, { Component } from 'react';
import { FaSpinner, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import api from '../../services/api';

import Header from '../../Components/Header';
import PokeCard from '../../Components/PokeCard';

import { Container, Spinner, Page, PageNumber } from './styles';

export default class List extends Component {
  state = {
    pokemons: [],
    urlNext: '',
    urlPrev: '',
    pageNumber: 1,
    loading: false,
  };

  async componentDidMount() {
    const response = await api.get();
    const { next, previous, results } = response.data;
    const params = new URL(next).searchParams;
    const offset = params.get('offset');
    this.setState({
      urlNext: next,
      urlPrev: previous,
      pokemons: results,
      pageNumber: offset - 19,
    });
  }

  backPage = async () => {
    const { urlPrev, pageNumber } = this.state;
    const response = await api.get(urlPrev);
    const { next, previous, results } = response.data;
    if (pageNumber > 1) {
      this.setState({
        urlNext: next,
        urlPrev: previous,
        pokemons: results,
        pageNumber: pageNumber - 1,
      });
    }
  };

  nextPage = async () => {
    const { urlNext, pageNumber } = this.state;
    const response = await api.get(urlNext);
    const { next, previous, results } = response.data;
    this.setState({
      urlNext: next,
      urlPrev: previous,
      pokemons: results,
      pageNumber: pageNumber + 1,
    });
  };

  render() {
    const { pokemons, loading, pageNumber } = this.state;
    return (
      <>
        <Header />
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
            <FaArrowLeft color="#fff" size={25} onClick={this.backPage} />
            <PageNumber>{pageNumber || 1}</PageNumber>
            <FaArrowRight color="#fff" size={25} onClick={this.nextPage} />
          </Page>
        </div>
      </>
    );
  }
}
