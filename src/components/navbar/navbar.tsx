import * as React from 'react';

export class Navbar extends React.Component<{}> {
  private smoothScrollTo(key: string) {
    document.querySelector(`#${key}`).scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light container">
        <div className="navbar-brand">
          <span
            onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('intro');
            }}
          >Daniel M Chong</span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav nav justify-content-end">
            <li className="nav-item">
              <a href="" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Contact Me</a>
            </li>
            <li className="nav-item">
              <a href="https://drive.google.com/file/d/1oBvWXSx6PH0lc80_dNPuAePyurOOgA0T/view" target="_blank" className="nav-link">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};
