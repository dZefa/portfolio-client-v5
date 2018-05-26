import * as React from 'react';

import './bio.scss';

interface BioState {
  currentProj: string;
  currentProjDetail: string;
  title1: string;
  link1: string;
  title2: string | null;
  link2: string | null;
  aboutMe: string;
}

export class Bio extends React.Component<{}, BioState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentProj: 'MunchE',
      currentProjDetail: 'MunchE is a workplace/school/community based social rating and advice web application. The goal is to have group-specific ratings/advice/reviews of local businesses so you don\'t have to sift through information not relevant to you.',
      title1: 'API',
      link1: 'https://github.com/dZefa/munch-e-api',
      title2: null,
      link2: null,
      aboutMe: 'Hi! I am a passionate software engineer who enjoys building new products and experiences for everyone to enjoy. I like to work up and down the stack as well as learning and using new technologies to come up with unique solutions. I am not tied to any specific tech stack or language and believe that the more you know, the better solutions you can come up with!',
    };

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

  private handleScroll() {
    const bioEl = document.querySelector(`.bio-body`);

    const scrollFromTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    this.handleAnimation(bioEl as HTMLDivElement, windowHeight + scrollFromTop);
  }

  render() {
    const { currentProj, currentProjDetail, title1, title2, link1, link2, aboutMe } = this.state;

    return (
      <div>
        <div id="bio" className="component-view">
          <div className="container">
            <div className="component-title">
              <h2>ABOUT ME</h2>
            </div>
            <div className="bio-body">
              <div className="aboutMe">
                <h4>Current Tech Interest: <em>TypeScript, Vue.js</em></h4>
                <p>{ aboutMe }</p>
                <br/>
                <p>{ 'Feel free to contact me using the information below (preferrably e-mail) or use the \'Contact Me\' button on the navigation bar above.' }</p>
              </div>
              <div className="current-proj">
                <h4>Current Passion Project: <em>{ currentProj }</em></h4>
                <h5><em>Work In Progress</em></h5>
                <p>{ currentProjDetail }</p>
                <br/>
                <a href={ link1 }>{ title1 }</a>
                {
                  title2 && ` || `
                }
                {
                  title2 &&
                  (
                    <a href={ link2 }>{ title2 }</a>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
