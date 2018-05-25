import * as React from 'react';

interface ProjItemProps {
  project: {
    name: string;
    image: string | null;
    url: string | null;
    urlTitle: string | null;
    paid: boolean;
    github: string;
    detail: string;
    stack: string;
  };
}

export class ProjItem extends React.Component<ProjItemProps> {
  constructor(props: ProjItemProps) {
    super(props);
  }

  render() {
    const { name, image, url, urlTitle, paid, github, detail, stack  } = this.props.project;

    return (
      <div className="project-item">
        <div className="project-left">
          {
            image &&
            (
              <img src={image} alt={name} />
            )
          }
        </div>
        <div className="project-right">
          <p>{ name }</p>
          <p>{ detail }</p>
          <p>{ stack }</p>
        </div>
      </div>
    )
  }
};
