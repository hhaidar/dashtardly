import React from 'react';

import Board, { Widget } from 'dashtardly';

const App = () => (
  <Board debug>
    <Widget width={3} height={3}>
      Ayyy 1
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 2
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 3
    </Widget>
    <Widget width={2} height={3}>
      Ayyy 4
    </Widget>
    <Widget width={3} height={2}>
      Ayyy 5
    </Widget>
    <Widget width={3} height={6}>
      Ayyy 6
    </Widget>
    <Widget width={5} height={6}>
      Ayyy 7
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 8
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 9
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 10
    </Widget>
    <Widget width={4} height={3}>
      Ayyy 11
    </Widget>
    <Widget width={3} height={1}>
      Ayyy 12
    </Widget>
  </Board>
);

export default App;
