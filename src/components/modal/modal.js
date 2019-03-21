import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Close, Copy, Title } from './modal.css';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

import '@reach/dialog/styles.css';
import './reach.override.styles.css';

// This component is here only to to showcase the
// React Context integration. No need to keep this if
// you don't require a Modal in your project.
export default class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.state.open && this.hide();
    }
  };

  disableScrolling(open) {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  hide () {
    this.setState({
      open: false,
    })
  }

  show () {
    this.setState({
      open: true,
    })
  }

  render() {
    const { description, title, thumbnail, videoId } = this.props;

    if (typeof document !== 'undefined') {
      this.disableScrolling(this.state.open);
    }
    // debugger; // eslint-disable-line
    return (
      <>
        <div style={{ cursor: 'pointer' }} onClick={this.show} onKeyDown={this.hide} role="button" tabIndex={0}>
          <img style={{ maxWidth: '340px', maxHeight: '240px' }} src={thumbnail.url} alt={title} />
          <figcaption style={{ maxWidth: '340px' }}>
            <Title>{title}</Title>
            <Copy>{description}</Copy>
          </figcaption>
        </div>

        <Dialog isOpen={this.state.open}>
          <Close onClick={this.hide}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </Close>
          <>
          <div className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }} >
            <iframe
              title={title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
            />
          </div>
          </>
        </Dialog>
      </>
    );
  }
}

Modal.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string, 
  thumbnail: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
};
