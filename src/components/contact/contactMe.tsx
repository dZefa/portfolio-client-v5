import * as React from 'react';
import * as axios from 'axios';

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

  private sendInfo(contact: ContactMeState) {
    axios.default.post(`https://www.danielmchong.com/contactMe`, contact)
      .then(() => {
        this.props.toggleModal();
        alert(`Message sent! I will be getting back to you soon!`);
      })
      .catch((err) => {
        alert(`Something seems to have gone wrong. Try again or contact me at danchong625@gmail.com. Sorry for the inconvenience!`);
      });
  }

  private setFirst(text: string) {
    this.setState({
      firstName: text,
    });
  }

  private setLast(text: string) {
    this.setState({
      lastName: text,
    });
  }

  private setEmail(text: string) {
    this.setState({
      email: text,
    });
  }

  private setSub(text: string) {
    this.setState({
      subject: text,
    });
  }

  private setMessage(text: string) {
    this.setState({
      message: text,
    });
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
