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
  onContact: boolean;
};

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      modalHidden: true,
      onContact: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const contactEl = document.querySelector(`#nav-contact`);

    if (this.state.modalHidden) {
      contactEl.classList.add('activeNav');
    } else {
      contactEl.classList.remove('activeNav');
    }

    this.setState({
      modalHidden: !this.state.modalHidden,
      onContact: !this.state.onContact,
    });
  }

  render() {
    const { modalHidden, onContact } = this.state;
    return (
      <div>
        <ContactMe hidden={modalHidden} toggleModal={this.toggleModal} />
        <Navbar hidden={modalHidden} onContact={onContact} toggleModal={this.toggleModal} />
        <Intro />
        <Project />
        <Skills />
        <Bio />
        <Footer />
      </div>
    )
  }
};
