import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Card, StyledLink, Sprite, Spinner } from './styles';

export default class PokeCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false,
    loading: false,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    const {
      pokemonIndex,
      imageLoading,
      imageUrl,
      toManyRequests,
      name,
      loading,
    } = this.state;
    return (
      <div>
        <StyledLink to={`pokemon/${pokemonIndex}`}>
          <Card>
            <h4>{pokemonIndex}</h4>
            {imageLoading ? (
              <Spinner loading={loading}>
                <FaSpinner color="#fff" size={30} />
              </Spinner>
            ) : null}
            <Sprite
              src={imageUrl}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: true })}
              style={
                toManyRequests
                  ? { display: 'none' }
                  : imageLoading
                  ? null
                  : { display: 'block' }
              }
            />
            {toManyRequests ? (
              <h5>
                <span>To Many Requests</span>
              </h5>
            ) : null}
            <div>
              <h5>
                {name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h5>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}
