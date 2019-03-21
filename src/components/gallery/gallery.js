import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/modal';
import { Container } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Modal {...item.node} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
