import * as React from 'react';

import './bio.scss';

export class Bio extends React.Component<{}> {
  render() {
    return (
      <div>
        <div id="bio" className="component-view">
          <div className="container">
            <div className="component-title">
              <h2>ABOUT ME</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
