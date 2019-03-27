import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import { Container, Submit, SubmitText, WhatWould, YourVoice } from './box.css';

const Box = () => 
  <Container>
    <YourVoice>
      Your voice is the most powerful part of our democracy.
    </YourVoice>
    <WhatWould>
      What would you do with an extra $1000 per month?
    </WhatWould>
    <Submit>
      <SubmitText>Submit a Video</SubmitText>
    </Submit>
  </Container>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
