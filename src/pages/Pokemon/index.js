import React, { Component } from 'react';
import api from 'axios';

import Header from '../../Components/Header';

import {
  Container,
  CardHeader,
  CardBody,
  Power,
  Description,
  Status,
  Stat,
  Profile,
  CardFooter,
} from './styles';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export default class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: '',
    },
    height: '',
    weight: '',
    eggGroups: '',
    catchRate: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
    themeColor: '#EF5350',
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    const pokemonRes = await api.get(pokemonUrl);
    this.setState({ pokemonIndex: pokemonRes.data.id });

    const { name } = pokemonRes.data;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat.base_stat;
          break;
        case 'attack':
          attack = stat.base_stat;
          break;
        case 'defense':
          defense = stat.base_stat;
          break;
        case 'speed':
          speed = stat.base_stat;
          break;
        case 'special-attack':
          specialAttack = stat.base_stat;
          break;
        case 'special-defense':
          specialDefense = stat.base_stat;
          break;
        default:
          break;
      }
    });

    const height =
      Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;

    const weight =
      Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;

    const types = pokemonRes.data.types.map(type => type.type.name);

    const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;

    const abilities = pokemonRes.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')}`;
      })
      .join(', ');

    await api.get(pokemonSpeciesUrl).then(res => {
      let description = '';
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          description = flavor.flavor_text;
        }
      });
      const femaleRate = res.data.gender_rate;
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data.capture_rate);

      const eggGroups = res.data.egg_groups
        .map(group => {
          return group.name
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        })
        .join(', ');

      const hatchSteps = 255 * (res.data.hatch_counter + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps,
      });
    });

    this.setState({
      imageUrl,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      },
      themeColor,
      height,
      weight,
      abilities,
      evs,
    });
  }

  render() {
    const {
      pokemonIndex,
      types,
      name,
      imageUrl,
      themeColor,
      stats,
      description,
      height,
      weight,
      catchRate,
      genderRatioMale,
      genderRatioFemale,
      eggGroups,
      hatchSteps,
      abilities,
      evs,
    } = this.state;
    return (
      <>
        <Header />
        <Container>
          <CardHeader>
            <div>
              <h5>
                {pokemonIndex} -{' '}
                {name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h5>
              <div>
                {types.map(type => (
                  <span
                    key={type}
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: 'white',
                    }}
                  >
                    {type
                      .toLowerCase()
                      .split(' ')
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')}
                  </span>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <div>
                <img src={imageUrl} alt={name} />
              </div>
              <Status>
                <h4>
                  {name
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </h4>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Speed</p>
                <p>Sp Atk</p>
                <p>Sp Def</p>
              </Status>
              <Power>
                <Stat width={stats.hp} background={`#${themeColor}`}>
                  <small>{stats.hp}</small>
                </Stat>

                <Stat width={stats.attack} background={`#${themeColor}`}>
                  <small>{stats.attack}</small>
                </Stat>

                <Stat width={stats.defense} background={`#${themeColor}`}>
                  <small>{stats.defense}</small>
                </Stat>

                <Stat width={stats.speed} background={`#${themeColor}`}>
                  <small>{stats.speed}</small>
                </Stat>

                <Stat width={stats.specialAttack} background={`#${themeColor}`}>
                  <small>{stats.specialAttack}</small>
                </Stat>

                <Stat
                  width={stats.specialDefense}
                  background={`#${themeColor}`}
                >
                  <small>{stats.specialDefense}</small>
                </Stat>
              </Power>
            </div>
            <Description>
              <p>{description}</p>
              <div />
            </Description>
            <Profile>
              <h5>Profile</h5>
              <div>
                <h6>Height: {height} ft.</h6>
                <h6>Weight: {weight} lbs</h6>
                <h6>Catch Rate: {catchRate}%</h6>
                <h6>Gender Ratio:</h6>

                <div className="gender">
                  <div
                    style={{
                      width: `${genderRatioFemale}%`,
                      backgroundColor: '#c2185b',
                    }}
                  >
                    <small>{genderRatioFemale}</small>
                  </div>
                  <div
                    style={{
                      width: `${genderRatioMale}%`,
                      backgroundColor: '#1976d2',
                    }}
                  >
                    <small>{genderRatioMale}</small>
                  </div>
                </div>
              </div>

              <div>
                <h6>Egg Groups: {eggGroups}</h6>
                <h6>Hatch Steps: {hatchSteps}</h6>
                <h6>Abilities: {abilities}</h6>
                <h6>EVs: {evs}</h6>
              </div>
            </Profile>
          </CardBody>
          <CardFooter>
            <a href="https://pokeapi.co/">PokeAPI.co</a>
            <a href="https://github.com/josiasfurtado">
              Made by: Josias Furtado
            </a>
          </CardFooter>
        </Container>
      </>
    );
  }
}
