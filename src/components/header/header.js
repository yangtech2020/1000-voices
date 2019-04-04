import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, shortTitle }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1" className="fullTitle">
          {title}
        </Title>
        <Title as="h1" className="shortTitle">
          {shortTitle}
        </Title>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
};

export default Header;
