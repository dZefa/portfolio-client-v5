import * as React from 'react';

import './contactMe.scss';

interface ContactMeProps {
  hidden: boolean;
  toggleModal: VoidFunction;
};

interface ContactMeState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactMe extends React.Component<ContactMeProps, ContactMeState> {
  constructor(props: ContactMeProps) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };

    this.contactClickHandler = this.contactClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.contactClickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.contactClickHandler);
  }

  private contactClickHandler(e: any) {
    if (e.target == document.getElementById('contact')) {
      this.props.toggleModal();
    }
  }

  render() {
    const { hidden, toggleModal } = this.props;

    return (
      <div id="contact" hidden={hidden}>
        contact me!
      </div>
    )
  }
};
