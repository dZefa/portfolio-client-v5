import * as React from 'react';

import './navbar.scss';

interface NavbarProps {
  toggleModal: VoidFunction;
  hidden: boolean;
  onContact: boolean;
};

interface NavbarState {
  backgroundColor: string;
  borderBottom: string;
  leftColor: string;
  rightColor: string;
  isMobile: boolean;
};

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      backgroundColor: 'transparent',
      borderBottom: 'none',
      leftColor: 'white',
      rightColor: 'white',
      isMobile: false,
    };

    this.navbarStyleHandler = this.navbarStyleHandler.bind(this);
    this.navActiveHandler = this.navActiveHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarStyleHandler);
    window.addEventListener('scroll', this.navActiveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navbarStyleHandler);
    window.removeEventListener('scroll', this.navActiveHandler);
  }

  private navbarStyleHandler(e: any) {
    const nav = document.querySelector('#navbar');

    if (window.innerWidth > 768) {
      if (e.target.documentElement.scrollTop > 20) {
        this.setState({
          backgroundColor: 'white',
          borderBottom: '1px solid lightgrey',
          leftColor: '#0695F5',
          rightColor: 'black',
          isMobile: false,
        });
      } else {
        this.setState({
          backgroundColor: 'transparent',
          borderBottom: 'none',
          leftColor: 'white',
          rightColor: 'white',
          isMobile: false,
        });
      }
    } else {
      this.setState({
        backgroundColor: 'white',
        borderBottom: '1px solid lightgrey',
        leftColor: '#0695F5',
        rightColor: 'black',
        isMobile: true,
      });
    }
  }
  
  private navActiveHandler(e: any) {
    const scrollPos: number = e.srcElement.documentElement.scrollTop;
    const navs = ['proj', 'skill', 'bio'];

    navs.forEach((nav, i) => {
      let refEl = document.getElementById(`${nav}`);
      let refLink = document.querySelector(`#nav-${nav}`);
      
      if(!this.state.isMobile) {
        if (!this.props.onContact) {
          if (refEl.offsetTop - 300 < scrollPos && (refEl.offsetTop+ refEl.clientHeight) > scrollPos + 300) {
            if (!refLink.classList.contains('activeNav')) {
              refLink.classList.add('activeNav');
            }
          } else {
            refLink.classList.remove('activeNav');
          }
        }
      }
    });
  }

  private smoothScrollTo(key: string) {
    document.querySelector(`#${key}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private toggleCollapse() {
    const rightEl = document.querySelector('.right-nav');

    if (!rightEl.classList.contains('showCollapse')) {
      rightEl.classList.add('showCollapse');
      rightEl.classList.add('animated');
      rightEl.classList.add('fadeIn');
    } else {
      rightEl.classList.remove('showCollapse');
      rightEl.classList.remove('animated');
      rightEl.classList.remove('fadeIn');
    }
  }

  render() {
    const { backgroundColor, borderBottom, leftColor, rightColor, isMobile } = this.state;
    const { toggleModal } = this.props;

    return (
      <div id="navbar" style={{ backgroundColor, borderBottom }}>
        <div className="container">
          <div className="left-nav">
            <a style={{ color: leftColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('intro');
            }}>Daniel M Chong</a>
            {
              // isMobile && 
              // (
              //   <span className="collapsed-bar" onClick={(e) => {
              //     e.preventDefault();
              //     this.toggleCollapse();
              //   }}>
              //     <i className="fas fa-bars fa-2x"></i>
              //   </span>
              // )
            }
          </div>
          <div className="right-nav">
            <a id="nav-proj" style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('proj');
            }}>Projects</a>
            <a id="nav-skill" style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('skill');
            }}>Skills</a>
            <a id="nav-bio" style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();
              this.smoothScrollTo('bio');
            }}>About Me</a>
            <a id="nav-contact" style={{ color: rightColor }} href="" onClick={(e) => {
              e.preventDefault();

              if (isMobile) {
                this.smoothScrollTo('footer');
              } else {
                toggleModal();
              }
            }}>Contact Me</a>
            <a style={{ color: rightColor }} href="https://drive.google.com/file/d/1oBvWXSx6PH0lc80_dNPuAePyurOOgA0T/view" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    )
  }
};
