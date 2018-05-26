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
}

export class Skills extends React.Component<{}, SkillState> {
  constructor(props: {}) {
    super({});

    this.state = {
      strongList: {
        title: 'STRONG',
        list: ['JavaScript/TypeScript'],
      },
      expList: {
        title: 'EXPERIENCED',
        list: ['C#'],
      },
    };
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
