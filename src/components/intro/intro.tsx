import * as React from 'react';

import './intro.scss';

interface IntroState {
  bio: string;
}

export class Intro extends React.Component<{}, IntroState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      bio: 'I am a software engineer with a passion for collaborating with awesome people to contribute towards building exciting projects that improves everyday life. I enjoy learning and using new technologies to come up with unique solutions.',
    };
  }

  render() {
    const { bio } = this.state;

    console.log(`Hi There! Visit https://www.danielmchong.com/rito for a more personal and vanilla JS website!`);

    return (
      <div id="intro" className="component-view">
        <div className="container">
          <h1>Daniel M Chong</h1>
          <hr/>
          <p>{ bio }</p>
          <div className="intro-buttons">
            <a href="https://github.com/dzefa" target="_blank">Take a Look at My Projects</a>
            <a href="https://github.com/dZefa/portfolio-client-v5" target="_blank">Code Behind My Website</a>
          </div>
        </div>
      </div>
    )
  }
};
