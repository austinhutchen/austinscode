import React, { useState,Component } from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';
const HamburgerStyles = styled.div<HamburgerProps>`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .burger-line {
    width: 100%;
    height: 3px;
    background-color: #000;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)')};
    }
  }
`;

interface NavProps {
  isOpen: boolean;
}

interface NavState {
  hamburgerOpen: boolean;
}

interface HamburgerButton {
  label: string;
  path: string;
}

  class Nav extends React.Component<NavProps, NavState> {


  constructor(props: NavProps) {

    super(props);
     navigateTo = (path: string) => {
    this.nav(path);
  };



    this.state = {
      hamburgerOpen: false,
    };
      toggleHamburger = () => {
    this.setState(prevState => ({
      hamburgerOpen: !prevState.hamburgerOpen,
    }));
  };
  }

 
  navButtons: HamburgerButton[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/AboutMe' },
    { label: 'Projects', path: '/Projects' },
    { label: 'Resume', path: '/Resume' },
    { label: 'Accreditations', path: '/Accredidations' },
  ];


  render() {
    const { isOpen } = this.props;
    const { hamburgerOpen } = this.state;



      return (
      <>

        <button onClick={this.toggleHamburger} />
        <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-md justify-content-center">
          <Hamburger isOpen={isOpen || hamburgerOpen}>
            <div className="burger-line">
              {this.navButtons.map((button, index) => (
                <button
                  key={index}
                  className="btn btn-md btn-outline-primary me-1"
                  type="button"
                  onClick={() => this.props.navigation.navigateTo(button.path)}
                >
                  {button.label}
                </button>
              ))}
            </div>
            <a href="/" className="navbar-brand">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
                alt="icon"
                width="30vh"
                height="30vh"
                className="nav-icon"
              />
            </a>
          </Hamburger>
        </nav>
        <div className="banner">
          <h3 id="name">Austin Hutchen</h3>
        </div>
      </>
    );

    }
}

export default withNavigation(Nav);

