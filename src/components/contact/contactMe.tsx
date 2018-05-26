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
  }

  render() {
    const { hidden, toggleModal } = this.props;
    
    return (
      <div hidden={hidden}>
        contact me!
      </div>
    )
  }
};
