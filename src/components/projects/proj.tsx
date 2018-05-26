import * as React from 'react';

import './proj.scss';

import { ProjItem } from './projItem';

interface project {
  name: string;
  image: string | null;
  url: string | null;
  urlTitle: string | null;
  position: string;
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
          position: 'Full Stack Engineer',
          github: 'https://github.com/StudioZephyr',
          detail: 'Scheduling Web Application used by Hack Reactor LA. Developed full stack in JavaScript including React for the front end, and Node/Express on the backend. Deployed using AWS.',
          stack: 'React, Redux, Webpack, Immutable, Moment, Node, Express, PostgreSQL, Socket.io, S3, EC2, RDS'
        }, {
          name: 'CodeSling.io',
          image: null,
          url: null,
          urlTitle: null,
          position: 'Back End Engineer',
          github: 'https://github.com/codesling/codesling.io',
          detail: 'Open source, online code sharing platform. Currently used by Hack Reactor LA curriculum as Legacy project. Worked on Back end mainly working with MongoDB and custom Shell commands with npm.',
          stack: 'Node, Express, MongoDB, Shell, Lodash'
        }, {
          name: 'FlyC',
          image: 'https://lh3.googleusercontent.com/7_r8UWmc3pSwWeKgbOv3q4Nx1qy3KjSYXO7TUeHD9mDgjaOs72tzZBrbeQe8pG4UVqM=s180-rw',
          url: 'https://play.google.com/store/apps/details?id=tech.studioZefa.Test&hl=en',
          urlTitle: 'Google Play',
          position: 'Designer and Developer',
          github: 'https://github.com/dzefa/FlyC',
          detail: 'Mobile vertical platformer gaming app on Google Play Store. Worked mainly in C# and Unity. Monetized using Google\'s AdMob and own algorithm.',
          stack: 'C#, Unity, Android Studio, Google Play, Firebase, AdMob',
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
      el.classList.add('showProject');
      el.classList.add('fadeIn');
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
