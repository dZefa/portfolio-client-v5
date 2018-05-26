import * as React from 'react';

import { Navbar } from '../navbar/navbar';
import { Intro } from '../intro/intro';
import { Project } from '../projects/proj';
import { Skills } from '../skills/skills';
import { Bio } from '../bio/bio';
import { Footer } from '../footer/footer';

export class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Project />
        <Skills />
        <Bio />
        <Footer />
      </div>
    )
  }
};
