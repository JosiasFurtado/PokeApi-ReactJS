import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './pages/List';
import Pokemon from './pages/Pokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/pokemon/:pokemonIndex" exact component={Pokemon} />
    </Switch>
  );
}
