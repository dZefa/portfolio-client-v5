import * as React from 'react';

import './proj.scss';

import { ProjItem } from './projItem';

interface project {
  name: string;
  image: string | null;
  url: string | null;
  urlTitle: string | null;
  paid: boolean;
  github: string;
  detail: string;
  stack: string;
}

interface ProjectState {
  projects: Array<project>;
}

export class Project extends React.Component<{}, ProjectState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'HRLA Scheduler',
          image: null,
          url: null,
          urlTitle: null,
          paid: true,
          github: 'https://github.com/StudioZephyr',
          detail: 'Scheduling Web Application used by Hack Reactor LA. Developed full stack in JavaScript including React for the front end, and Node/Express on the backend. Deployed on AWS EC2 using AWS RDS PostgreSQL.',
          stack: 'React, Redux, Webpack, Immutable, Moment, Node, Express, PostgreSQL, Socket.io'
        }
      ],
    }

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
    const { projects } = this.state;

    return (
      <div>
        <div id="proj" className="component-view">
          <div className="container">
            <div className="component-title">
              <h2>PROJECTS</h2>
            </div>
            <div className="proj-body">
              {
                projects.map((proj, i) => {
                  return <ProjItem key={`proj-item-${i}`} project={proj} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};
