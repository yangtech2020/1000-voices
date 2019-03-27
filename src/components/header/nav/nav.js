import React from 'react';
import { Link } from 'gatsby';
import { Container, ListItem } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <ListItem>
        <a href="https://yang2020.com">YANG2020</a>
      </ListItem>
      <ListItem>
        <Link to="/submit">Submit</Link>
      </ListItem>
      <ListItem>
        <a href="https://secure.actblue.com/donate/friends-of-andrew-yang">DONATE</a>
      </ListItem>
    </ul>
  </Container>
);

export default Nav;
