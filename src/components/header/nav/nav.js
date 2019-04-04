import React from 'react';
import { Link } from 'gatsby';
import { Container, MenuButton } from './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container>
        <MenuButton
          className={this.state.isOpen ? 'opened' : undefined}
          onClick={this.toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
        <ul className={this.state.isOpen ? 'opened' : undefined}>
          <li>
            <a href="https://yang2020.com">YANG2020</a>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
          <li>
            <a href="https://secure.actblue.com/donate/friends-of-andrew-yang">
              DONATE
            </a>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Nav;
