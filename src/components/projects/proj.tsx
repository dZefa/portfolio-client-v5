import * as React from 'react';

import './proj.scss';

export class Project extends React.Component<{}> {
  constructor(props: {}) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleAnimation(el: HTMLDivElement, top: number) {
    const hasClass = el.classList.contains('animated');

    if (!hasClass && top > el.offsetTop) {
      el.classList.add('bounceInRight');
      el.classList.add('animated');
    }
  }

  private handleScroll(e: any) {
    const projects = document.querySelectorAll('.project-item');

    const scrollFromTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    projects.forEach((el, i) => {
      this.handleAnimation(el as HTMLDivElement, windowHeight + scrollFromTop);
    });
  }

  render() {
    return (
      <div>
        <div id="proj" className="component-view">
          <div className="container">
            <div className="component-title">
              <h2>PROJECTS</h2>
            </div>
            <div className="proj-body">
              <div className="project-item">
                hello
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
