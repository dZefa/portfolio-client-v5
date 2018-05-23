import * as React from 'react';

import './intro.scss';

interface IntroState {
  bio: string;
}

export class Intro extends React.Component<{}, IntroState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      bio: 'I am a software engineer with a passion for collaborating with awesome people to contribute towards building exciting projects that improves everyday life. I enjoy challenging myself with new technologies.',
    };
  }

  render() {
    const { bio } = this.state;

    return (
      <div id="intro" className="component-view">
        <div className="container">
          <h1>Daniel M Chong</h1>
          <hr/>
          <p>{ bio }</p>
        </div>
      </div>
    )
  }
};
