import * as React from 'react';

import { Navbar } from '../navbar/navbar';
import { Intro } from '../intro/intro';
import { Project } from '../projects/proj';

export class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Project />
      </div>
    )
  }
};
