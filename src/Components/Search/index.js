import React, { Component } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, SubmitButton, Form } from './styles';

export default class Search extends Component {
  state = {
    search: '',
    url: '',
    error: null,
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: false });
    try {
      const { search } = this.state;

      if (search === '') {
        throw new Error('Search empyt');
      } else {
        const url = `https://pokeapi.co/api/v2/pokemon/${search}/`;
        const response = api.get(url);
        this.setState({ url: response.data });
      }

      this.setState({
        search: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { search, loading, error } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="PokeID or Name"
            value={search}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit" loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={20} />
            ) : (
              <Link to={`/pokemon/${search}`}>
                <FaSearch color="#fff" size={20} />
              </Link>
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
