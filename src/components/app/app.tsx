import * as React from 'react';

import { Navbar } from '../navbar/navbar';
import { Intro } from '../intro/intro';
import { Project } from '../projects/proj';
import { Skills } from '../skills/skills';
import { Bio } from '../bio/bio';
import { Footer } from '../footer/footer';
import { ContactMe } from '../contact/contactMe';

interface AppState {
  modalHidden: boolean;
};

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      modalHidden: true,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalHidden: !this.state.modalHidden,
    });
  }

  render() {
    const { modalHidden } = this.state;
    return (
      <div>
        <ContactMe hidden={modalHidden} toggleModal={this.toggleModal} />
        <Navbar hidden={modalHidden} toggleModal={this.toggleModal} />
        <Intro />
        <Project />
        <Skills />
        <Bio />
        <Footer />
      </div>
    )
  }
};
