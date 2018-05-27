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
    const contactLink = document.querySelector(`#nav-contact`);
    const contactEl = document.querySelector(`.modal-content`);

    if (this.state.modalHidden) {
      contactLink.classList.add('activeNav');
      contactEl.classList.add('animated');
      contactEl.classList.add('slideInDown');
    } else {
      contactLink.classList.remove('activeNav');
      contactEl.classList.remove('animated');
      contactEl.classList.remove('slideInDown');
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
