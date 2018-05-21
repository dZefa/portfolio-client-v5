import * as React from 'react';
import { render } from 'react-dom';

import { App } from './components/app/app';

render(
  <App compiler="Typescript" framework="React" />,
  document.getElementById('root')
);
