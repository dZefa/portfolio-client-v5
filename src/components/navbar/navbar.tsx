import * as React from 'react';

import './navbar.scss';

interface navbarState {
  backgroundColor: string;
  borderBottom: string;
  leftColor: string;
  rightColor: string;
  isMobile: boolean;
}

export class Navbar extends React.Component<{}, navbarState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      backgroundColor: 'transparent',
      borderBottom: 'none',
      leftColor: 'white',
      rightColor: 'white',
      isMobile: false,
    }

    this.navScrollEvent = this.navScrollEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScrollEvent);
  }

  private navScrollEvent(e: any) {
    const nav = document.querySelector('#navbar');

    if (window.innerWidth > 768) {
      if (e.target.documentElement.scrollTop > 20) {
        this.setState({
          backgroundColor: 'white',
          borderBottom: '1px solid lightgrey',
          leftColor: '#0695F5',
          rightColor: 'black',
          isMobile: false,
        });
      } else {
        this.setState({
          backgroundColor: 'transparent',
          borderBottom: 'none',
          leftColor: 'white',
          rightColor: 'white',
          isMobile: false,
        });
      }
    } else {
      this.setState({
        backgroundColor: 'white',
        borderBottom: '1px solid lightgrey',
        leftColor: '#0695F5',
        rightColor: 'black',
        isMobile: true,
      });
    }
  }

  private smoothScrollTo(key: string) {
    document.querySelector(`#${key}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const { backgroundColor, borderBottom, leftColor, rightColor, isMobile } = this.state;

    return (
      <div id="navbar" style={{ backgroundColor, borderBottom }}>
        <div className="container">
          <div className="left-nav">
            <a style={{ color: leftColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('intro');
            }}>Daniel Chong</a>
          </div>
          <div className="right-nav">
            <a style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('proj');
            }}>Projects</a>
            <a style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('tech');
            }}>Skills</a>
            <a style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('bio');
            }}>About Me</a>
            <a style={{ color: rightColor }} href="">Contact Me</a>
            <a style={{ color: rightColor }} href="https://drive.google.com/file/d/1oBvWXSx6PH0lc80_dNPuAePyurOOgA0T/view" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    )
  }
};
