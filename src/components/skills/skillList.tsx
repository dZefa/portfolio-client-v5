import * as React from 'react';

interface SkillListProps {
  title: string;
  list: Array<string>;
};

export class SkillList extends React.Component<SkillListProps> {
  constructor(props: SkillListProps) {
    super(props);
  }

  render() {
    const { title, list } = this.props;
    
    return (
      <div className="skill-list">
        <h4>{ title }</h4>
        <ul>
          {
            list.map((item, i) => {
              return <li>{ item }</li>
            })
          }
        </ul>
      </div>
    )
  }
};
