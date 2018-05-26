import * as React from 'react';

interface ProjItemProps {
  project: {
    name: string;
    image: string | null;
    url: string | null;
    urlTitle: string | null;
    position: string;
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
    const { name, image, url, urlTitle, position, github, detail, stack  } = this.props.project;

    return (
      <div className="project-item">
        <div className="project-left">
          {
            (window.innerWidth > 768 && image) &&
            (
              <img src={image} alt={name} />
            )
          }
          <h3>{ name }</h3>
        </div>
        <div className="project-right">
          <h4>Position: { position }</h4>
          <p>{ detail }</p>
          <p className="project-stack">{ stack }</p>
          {
            url &&
            <a href={url} target="_blank">{ urlTitle }</a>
          }
          {
            url && ` || `
          }
          <a href={github} target="_blank">GitHub</a>
        </div>
      </div>
    )
  }
};
