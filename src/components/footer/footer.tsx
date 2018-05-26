import * as React from 'react';

import './footer.scss';

interface FooterState {
  name: string;
  phone: string;
  email: string;
};

export class Footer extends React.Component<{}, FooterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: 'Daniel M Chong',
      phone: '213-550-8565',
      email: 'danchong625@gmail.com'
    }
  }
  render() {
    const { name, phone, email } = this.state;

    return (
      <div>
        <div id="footer">
          <div className="container">
            <p className="footer-name">{ name }</p>
            <p>{ phone }</p>
            <a href={`mailto:${ email }`}>{ email }</a>
          </div>
        </div>
      </div>
    )
  }
};
