import * as React from 'react';

interface AppProps {
  compiler: string;
  framework: string;
};

export class App extends React.Component<{}> {
  render() {
    return (
      <div>HI</div>
    )
  }
};
