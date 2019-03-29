import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  min-height: 37rem;
  background-color: #98c2e7;
  margin-bottom: 2rem;

  ${MEDIA.DESKTOP`
    padding: 12rem 0rem 0rem 12rem;
  `}

  ${MEDIA.IPAD`
    padding: 2rem;
  `}
`;

export const Submit = styled.div`
  background-color: #ea364c;
  height: 69px;
  width: 261px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }

  ${MEDIA.IPAD`
    margin: 0 auto;
  `}
`;

export const SubmitText = styled.div`
  min-height: 26px;
  min-width: 210px;
  color: #fefffe;
  font-family: Futura;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 27px;
  padding-top: 2rem;
  text-align: center;
  margin: 0 auto;
`;

export const WhatWould = styled.div`
  color: #000000;
  font-family: Futura;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  max-width: 687px;
  padding-bottom: 2rem;

  ${MEDIA.DESKTOP`
    padding-top: 2rem;
  `}

  ${MEDIA.IPAD`
    padding-top: 0rem;
    text-align: center;
  `}
`;
export const YourVoice = styled.div`
  color: #feffff;
  font-family: Futura;
  font-size: 36px;
  font-weight: bold;
  line-height: 47px;
  max-width: 622px;

  ${MEDIA.DESKTOP`
    padding-bottom: 2rem;
  `}

  ${MEDIA.IPAD`
    text-align: center;
  `}
`;
