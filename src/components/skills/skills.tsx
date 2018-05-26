import * as React from 'react';

import './skills.scss';

import { SkillList } from './skillList';

interface SkillState {
  strongList: {
    title: string;
    list: Array<string>;
  }
  expList: {
    title: string;
    list: Array<string>;
  }
};

export class Skills extends React.Component<{}, SkillState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      strongList: {
        title: 'STRONG',
        list: [
          'JavaScript/TypeScript',
          'HTML5/CSS3/SASS/SCSS',
          'jQuery/AJAX/JSON',
          'React.js/Redux/Webpack/Babel',
          'Node.js/Express/JWT',
          'PostgreSQL, NoSQL',
          'AWS(S3, EC2, RDS, Cognito, etc)',
          'Jest/Enzyme/Mocha/Chai',
          'Electron',
          'Git'
        ],
      },
      expList: {
        title: 'EXPERIENCED',
        list: [
          'C#',
          'Python/Flask',
          'Java',
          'Unity',
          'Android Studio',
          'Firebase/AdMob/Google Play',
          'Socket.io',
          'Angular.js/Backbone.js',
          'MongoDB/MySQL'
        ],
      },
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
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
    const skills = document.querySelectorAll('.skill-list');

    const scrollFromTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    skills.forEach((el, i) => {
      this.handleAnimation(el as HTMLDivElement, windowHeight + scrollFromTop);
    });
  }

  render() {
    const { strongList, expList } = this.state;

    return (
      <div>
        <div id="skill" className="component-view">
          <div className="container">
            <div className="component-title">
              <h2>EXPERTISE</h2>
            </div>
            <div className="skill-body">
              <SkillList title={strongList.title} list={strongList.list} />
              <SkillList title={expList.title} list={expList.list} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};
