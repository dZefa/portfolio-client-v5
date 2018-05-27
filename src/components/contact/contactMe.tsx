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
    const { firstName, lastName, email, subject, message } = this.state;

    return (
      <div hidden={hidden}>
        <div id="contact" className="component-view">
          <div className="container">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Let's Chat!</h2>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" onChange={e => this.setFirst(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" onChange={e => this.setLast(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" onChange={e => this.setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" onChange={e => this.setSub(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} onChange={e => this.setMessage(e.target.value)} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                }}>Cancel</button>
                <button onClick={(e) => {
                  e.preventDefault();
                  this.sendInfo({ firstName, lastName, email, subject, message });
                }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
